import { View, Text, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

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
      <View className="my-6 px-4 space-y-6">
        <View className="flex-row justify-between items-center mb-6">
         <View className="mt-2 px-4">
          <Text className="text-xl font-pbold">{`Good ${greet}, John!`}</Text>
         </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default home                             