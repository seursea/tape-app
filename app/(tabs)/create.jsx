import { 
  View, 
  Text, 
  Modal, 
  StatusBar, 
  TextInput, 
  TouchableWithoutFeedback, 
  Keyboard } from 'react-native'
import React, { useState} from 'react'

const create = ({visible}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleOnChangeText = (text, valueFor) => {
    if(valueFor === 'title') setTitle(text);
    if(valueFor === 'description') setDescription(text);
  } 

  console.log(title, description);
  const handleModalClose = () => {
    Keyboard.dismiss();
  }
  return (
    <>
    <StatusBar />
    <Modal 
      visible={visible} 
      animationType="slide"
      transparent={true}>
        <TouchableWithoutFeedback onPress={handleModalClose}>
      <View className="pt-6 px-6 flex-1 bg-primary">
      <TextInput 
        value={title}
        className="border-b-2 border-secondary-default text-2xl h-30 mb-6 mt-6 font-psemibold"
        placeholder='Task Title'
        onChangeText={(text) => handleOnChangeText(text, 'title')}
      />
      <TextInput 
        value={description}
        className="text-lg"  
        placeholder='Notes'
        multiline={true}
        textAlignVertical='top'
        onChangeText={(text) => handleOnChangeText(text, 'description')}
      />
      </View>
    
      </TouchableWithoutFeedback>

    </Modal>
    </>
  )
}

export default create