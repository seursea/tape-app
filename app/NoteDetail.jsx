import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RoundButton from '../components/RoundButton'  
import Create from '../components/create'

const NoteDetail = () => {
    const { id } = useLocalSearchParams();
    const [note, setNote] = useState({ title: '', description: '' });
    const [showModal, setShowModal] = useState(false);
    const [isEdit, setIsEdit] = useState(false);  

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
    
    const router = useRouter();
    
    const displayDeleteAlert = () => {
      Alert.alert("Are you sure?", "This action will delete your note permanently.", [
        {
          text: "Cancel",
          onPress: () => console.log('Cancel pressed'),
        },
        {
          text: "Delete",
          onPress: deleteNote,
        }
      ], {
        cancelable: true
      })
    }
    
    const deleteNote = async () => {
      try {
        const result = await AsyncStorage.getItem('notes');
        let notes = [];
        if (result !== null) {
          notes = JSON.parse(result);
        }
        const newNotes = notes.filter(note => note.id !== parseInt(id));
        await AsyncStorage.setItem('notes', JSON.stringify(newNotes));
        console.log('Note deleted:', id); // Add logging
        router.push('/home');
      } catch (error) {
        console.error('Failed to delete note:', error);
      }
    };  
  
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

  const handleUpdate = async (title, description, time) => {
    try {
      const result = await AsyncStorage.getItem('notes');
      let notes = [];
      if (result !== null) {
        notes = JSON.parse(result);
      }
      const newNotes = notes.map(n => {
        if (n.id === parseInt(id)) {
          return { ...n, title, description, time: Date.now(), isUpdated: true };
        }
        return n;
      });
      setNote(newNotes.find(n => n.id === parseInt(id)));
      await AsyncStorage.setItem('notes', JSON.stringify(newNotes));
      console.log('Note updated:', id); // Add logging
      router.push('/home'); // Navigate back to home screen to reflect changes
    } catch (error) {
      console.error('Failed to update note:', error);
    }
  };
  
  const handleOnClose = () => setShowModal(false);

  const openEditModal = () => {
    setIsEdit(true);
    setShowModal(true);
  }

  return (
    <>
    <ScrollView className="bg-secondary-default p-6 mt-4 flex-1" contentContainerStyle={{ paddingBottom: 40 }}>
      <View className="px-4 mt-12">
        <Text className="text-base text-gray-500 text-right py-2">{`${formatDate(note.time)}`}</Text>
        <Text className="text-3xl font-pbold text-primary mb-2">{note.title}</Text>
        <Text className="text-lg text-black-light opacity-70">{note.description}</Text>
      </View>
      
    </ScrollView>
    <View className="absolute bottom-8 right-6 flex-col ">
        <RoundButton 
          antIconName='edit'
          color='#F1EDE4'
          containerStyles="bg-[#73DAC0] opacity-70 mb-4" 
          onPress={openEditModal}
        />
        <RoundButton 
          antIconName='delete'
          color='#F1EDE4'
          containerStyles="bg-[#73DAC0] opacity-70"
          onPress={displayDeleteAlert}
        />
      </View>
      <Create
        isEdit={isEdit}
        note={note}
        onClose={handleOnClose} 
        onSubmit={handleUpdate}
        visible={showModal}
      />
      </>
  );
}
export default NoteDetail;