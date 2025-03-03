import { View, Text, FlatList, ScrollView, Pressable, Keyboard } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '../../components/SearchBar'
import Create from '../../components/create'
import RoundButton from '../../components/RoundButton'  
import Note from '../../components/Note'  
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NotFound from '../../components/NotFound'

const home = () => {
  const router = useRouter();
  const [greet, setGreet] = useState("Evening");
  const [modalVisible, setModalVisible] = useState(false);  
  const [notes, setNotes] = useState([]);    
  const [searchQuery, setSearchQuery] = useState('');
  const [resultNotFound, setResultNotFound] = useState(false);

  const findGreet = () => {
    const hrs = new Date().getHours()
    if (hrs === 0 || hrs < 12) return setGreet("Morning");
    if (hrs === 1 || hrs < 17) return setGreet("Afternoon");
    setGreet("Evening");
  }

  const findNotes = async () => {
    try {
      const result = await AsyncStorage.getItem('notes');
      console.log('Fetched notes:', result); // Add logging
      if (result !== null) {
        setNotes(JSON.parse(result));
      }
    } catch (error) {
      console.error('Failed to fetch notes:', error);
    }
  }

  useEffect(() => {
    findNotes();
    findGreet();
  }, [])

const handleOnSubmit = async (title, description) => {
  const note = { id: Date.now(), title, description, time: Date.now() };
    console.log('New note:', note); // Add logging
    const newNotes = [...notes, note];
    setNotes(newNotes);
    try {
      await AsyncStorage.setItem('notes', JSON.stringify(newNotes));
      console.log('Saved notes:', JSON.stringify(newNotes)); // Add logging
    } catch (error) {
      console.error('Failed to save notes:', error);
    }
  
} 

const handleSearch = async (query) => {
  setSearchQuery(query);
  if (!query.trim()) {
    setSearchQuery('');
    setResultNotFound(false);
    await findNotes(); // Fetch all notes again
    return;
  }
  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(query.toLowerCase())
  );
  if (filteredNotes.length) {
    setNotes([...filteredNotes]);
  } else {
    setResultNotFound(true);
  }
}

const handleOnClear = async () => {
  setSearchQuery('');
  setResultNotFound(false);
  await findNotes(); 
}

return (
  <SafeAreaView className="flex-1 bg-secondary-default">
    <Pressable onPress={() => Keyboard.dismiss()} className="flex-1">
      <View className="mt-6 px-6 flex-1 ">
        <Text className="text-xl font-pbold mb-4">{`Good ${greet}, John!`}</Text>
        {notes.length ? (
          <SearchBar 
            value={searchQuery}
            onChangeText={handleSearch}
            onClear={handleOnClear}
          />) : null}

          {resultNotFound ? <NotFound /> : <FlatList
          data={notes}
          keyExtractor={(item) => item.id.toString()} 
          renderItem={({ item }) => (
            <Note 
              onPress={() => router.push(`/NoteDetail?id=${item.id}`)}
              item={item} 
              
            />
          )}
          ListEmptyComponent={() => (
            <View className="flex-1 justify-center items-center min-h-[650px]">
              <Text className="font-pbold text-4xl opacity-20 text-center">No Tasks</Text>
            </View>
          )}
        />}
        
      </View>
      <View className="flex-row justify-end px-6 mb-6">
        <RoundButton 
          onPress={() => setModalVisible(true)}
          antIconName='plus'
          color='#F1EDE4'
          containerStyles="bg-[#73DAC0]"
        />
        
      </View>
      <Create 
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={handleOnSubmit}
      />
    </Pressable>
  </SafeAreaView>
);
}

export default home                             