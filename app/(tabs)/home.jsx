import { View, Text, FlatList, ScrollView, Pressable, Keyboard } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '../../components/SearchBar'
import Create from '../../components/create'
import RoundButton from '../../components/RoundButton'  

const home = () => {
  const [greet, setGreet] = useState("Evening");
  const [modalVisible, setModalVisible] = useState(false);  

  const findGreet = () => {
    const hrs = new Date().getHours()
    if (hrs === 0 || hrs < 12) return setGreet("Morning");
    if (hrs === 1 || hrs < 17) return setGreet("Afternoon");
    setGreet("Evening");
  }

  useEffect(() => {
    findGreet();
  }, [])

const handleOnSubmit = (title, description) => {
  const note = {id: Date.now(), title, description, time: Date.now()} 
} 

  return (
    <SafeAreaView className="flex-1 bg-secondary-default">
      <Pressable onPress={() => Keyboard.dismiss()} className="flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="mt-6 px-6 flex-1">
          <Text className="text-xl font-pbold mb-4">{`Good ${greet}, John!`}</Text>
          <SearchBar 
            
          />
          <View className="mt-6 justify-center items-center flex-1">
            <Text className="font-pbold text-4xl opacity-20 text-center">No Notes</Text>
          </View>
         </View>
         
      </ScrollView>
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