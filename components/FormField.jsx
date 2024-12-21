import { View, Text, TextInput, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className='text-base text-black-light opacity-70 font-pmedium'>{title}</Text>
      
      <View className={`w-full h-16 px-4 bg-gray-dark-200 border-2 rounded-lg ${isFocused ? 'border-primary' : 'border-gray-dark'} items-center`}>
        <TextInput 
          className='flex-1 text-black-light text-base font-psemibold'
          value={value}
          placeholder={placeholder}
          placeholderTextColor='#73DAC0'
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />

        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>>
            
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField