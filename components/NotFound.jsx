import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

const NotFound = () => {
  return (
    <View className="flex-1 items-center justify-center opacity-70 ">    
      <AntDesign
        name="frowno" 
        size={100} 
        color="black" 
      />
      <Text className="text-2xl font-pbold mt-3">
        Task Not Found
      </Text>
    </View>
  )
}

export default NotFound