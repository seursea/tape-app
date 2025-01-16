import { View, Text } from 'react-native'
import React from 'react'
const Note = ({ item }) => {
    const { title, description } = item;
    return ( 
        <View className="bg-gray-light opacity-80 p-4 rounded-2xl mb-4">
            <Text 
            className="text-lg font-pmedium"numberOfLines={2}>{title}</Text>
            <Text numberOfLines={3}
            className="text-plight">{description}</Text>
        </View>        
    )
}

export default Note