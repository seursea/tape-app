import React from 'react';
import { AntDesign } from '@expo/vector-icons';

const RoundButton = ( {antIconName, size, onPress, color, containerStyles}) => {
  return (
    <AntDesign
        name={antIconName}
        onPress={onPress}
        className={`bg-seco ndary-default rounded-full p-4 ${containerStyles}`}
        size={24}
        color={color}
    ></AntDesign>
  )
}

export default RoundButton