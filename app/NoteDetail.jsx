import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RoundButton from '../components/RoundButton'  

const NoteDetail = () => {
    const { id } = useLocalSearchParams();
    const [note, setNote] = useState({ title: '', description: '' });
    const formatDate = (ms) => {
      const date = new Date(ms);
      const day = date.getDate();
      const  month = date.getMonth() + 1;
      const year = date.getFullYear();
      const hrs = date.getHours();
      const mins = date.getMinutes();
      const secs = date.getSeconds();

      return `${month}/${day}/${year} - ${hrs}:${mins}:${secs}`;
    }

    const displayDeleteAlert = () => {
      
    }
  
    useEffect(() => {
      const fetchNote = async () => {
        try {
          const result = await AsyncStorage.getItem('notes');
          console.log('Fetched notes:', result); // Add logging
          if (result !== null) {
            const notes = JSON.parse(result);
            const note = notes.find(note => note.id === parseInt(id));
            if (note) {
              setNote(note);
            } else {
              console.error('Note not found');
            }
          } else {
            console.error('No notes found in storage');
          }
        } catch (error) {
          console.error('Failed to fetch note:', error);
        }
      };
  
      fetchNote();
    }, [id]);

  return (
    <>
    <ScrollView className="bg-secondary-default p-6 mt-4 flex-1" contentContainerStyle={{ paddingBottom: 40 }}>
      <View className="px-8 mt-12">
        <Text className="text-base text-gray-500 text-right py-2">{`Created At ${formatDate(note.time)}`}</Text>
        <Text className="text-3xl font-pbold text-primary mb-2">{note.title}</Text>
        <Text className="text-lg text-black-light opacity-70">{note.description}</Text>
      </View>
      
    </ScrollView>
    <View className="absolute bottom-8 right-6 flex-col ">
        <RoundButton 
          antIconName='edit'
          color='#F1EDE4'
          containerStyles="bg-[#73DAC0] opacity-70 mb-4" 
          onPress={displayDeleteAlert}
        />
        <RoundButton 
          antIconName='delete'
          color='#F1EDE4'
          containerStyles="bg-[#73DAC0] opacity-70"
          onPress={() => console.log('Delete pressed')}
        />
      </View>
      </>
  );
}
export default NoteDetail;