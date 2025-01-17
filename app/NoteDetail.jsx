import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NoteDetail = () => {
    const { id } = useLocalSearchParams();
    const [note, setNote] = useState({ title: '', description: '' });
  
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
    <View className="bg-secondary-default p-6 flex-1 mt-4">
      <View className="px-8 mt-12 py-4">
        <Text className="text-3xl font-pbold text-primary mb-2">{note.title}</Text>
        <Text className="text-pregular text-lg text-black-light opacity-70">{note.description}</Text>
      </View>
    </View>
  );
}
export default NoteDetail;