import { View, Text, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '../../components/SearchBar'

const home = () => {
  const [greet, setGreet] = useState("Evening");

  const findGreet = () => {
    const hrs = new Date().getHours()
    if (hrs === 0 || hrs < 12) return setGreet("Morning");
    if (hrs === 1 || hrs < 17) return setGreet("Afternoon");
    setGreet("Evening");
  }

  useEffect(() => {
    findGreet();
  }, )
  return (
    <SafeAreaView className="flex-1 bg-secondary-default">
      {/* <View className="my-6 px-4 space-y-6">
        <View className="flex-row justify-between items-center mb-6"> */}
         <View className="mt-6 px-6 flex-1">
          <Text className="text-xl font-pbold mb-4">{`Good ${greet}, John!`}</Text>
          <SearchBar 
            
          />
          <View className="mt-6 justify-center items-center flex-1">
            <Text className="font-pbold text-4xl opacity-20 text-center">No Tasks</Text>
          </View>
         </View>
        {/* </View>
      </View> */}
    </SafeAreaView>
  );
}

export default home                             