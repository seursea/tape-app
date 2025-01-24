import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity 
        onPress={handlePress}
        activeOpacity={0.7}

        className={`bg-primary rounded-md min-h-[62px] flex flex-row justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
        disabled={isLoading}>
        <Text className={`text-black text-lg font-pbold ${textStyles}`}>
          {title}
        </Text>
    </TouchableOpacity>
  )
}

export default CustomButton;