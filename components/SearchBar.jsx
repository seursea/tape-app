import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

const SearchBar = ({ value, onChangeText, onClear }) => {
  return (
    <View className="w-full h-16 opacity-70 mb-4">
      <TextInput 
        className="w-full px-4 bg-black-light-200 border rounded-3xl opacity-70"
        placeholder="Find your tasks"
        value={value}
        onChangeText={onChangeText}
      />
      {value ? 
      <AntDesign 
        name="close" 
        size={20} 
        color="black" 
        onPress={onClear} 
        className="absolute right-4 top-3"
      /> : null}
    </View>
  )
}

export default SearchBar