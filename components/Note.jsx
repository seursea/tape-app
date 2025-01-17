import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'


const Note = ({ item, onPress }) => {
    const { title, description } = item;
    return ( 
        <TouchableOpacity 
        className="bg-gray-light opacity-80 p-4 rounded-2xl mb-4"
        onPress={onPress}>
            <Text 
            className="text-lg font-pmedium"numberOfLines={2}>{title}</Text>
            <Text numberOfLines={3}
            className="text-plight">{description}</Text>
        </TouchableOpacity>        
    )
}

export default Note