import { View, Text, TextInput } from 'react-native'
import React from 'react'

const SearchBar = () => {
  return (
    <View className="w-full h-16 opacity-70 mb-4">
      <TextInput 
        className="w-full px-4 bg-black-light-200 border rounded-3xl opacity-70"
        placeholder="Search here"
      />
    </View>
  )
}

export default SearchBar