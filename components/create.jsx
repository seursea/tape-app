import { 
  View, 
  Text, 
  Modal, 
  StatusBar, 
  TextInput, 
  TouchableWithoutFeedback, 
  Keyboard 
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';    
import RoundButton from './RoundButton';

const Create = ({ visible, onClose, onSubmit, note, isEdit }) => {
  const router = useRouter();
  // const [modalVisible, setModalVisible] = useState(true);// Set initial state to true
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (isEdit) {
      setTitle(note.title);
      setDescription(note.description);
    }
  }, [isEdit]);
           
  const handleOnChangeText = (text, valueFor) => {
    if (valueFor === 'title') setTitle(text);
    if (valueFor === 'description') setDescription(text);
  }

  const handleSubmit = () => {
    if(!title.trim() && !description.trim()) return onClose(); 
    
    if (isEdit) {
      onSubmit(title, description, Date.now());
    } else {
      onSubmit(title, description);
      setTitle('');
      setDescription('');
    }
    
    onClose();
  }

  const handleClose = () => {
    Keyboard.dismiss();
  }
  
  const closeModal = () => {
    if(!isEdit) {
      setTitle('');
      setDescription('');
    };
    onClose();
  }   

  return (
    <>
    <StatusBar backgroundColor='#F1EDE4' style='dark'/>
      <Modal 
        visible={visible} 
        animationType="slide"
        transparent={true} // Makes the modal background semi-transparent
      >
        <TouchableWithoutFeedback onPress={handleClose}>
          <View className="pt-6 px-6 flex-1 bg-primary">
            <TouchableWithoutFeedback onPress={() => { /* Prevent closing when tapping inside */ }}>
              <View className="pt-6 px-6 bg-primary rounded-lg w-11/12">
                <TextInput 
                  className="border-b-2 border-secondary-default text-2xl h-30 mb-6 mt-6 font-psemibold"
                  placeholder='Task Title'
                  value={title}
                  onChangeText={(text) => handleOnChangeText(text, 'title')}
                />
                <TextInput 
                  className="text-lg h-32 border-secondary-default mb-6 font-pregular"
                  placeholder='Task Description'
                  multiline={true}
                  textAlignVertical='top'
                  value={description}
                  onChangeText={(text) => handleOnChangeText(text, 'description')}
                />
                
              </View>
            </TouchableWithoutFeedback>
            <View className="flex-row justify-center px-6">
                  {title.trim() || description.trim() ? <RoundButton 
                    antIconName="close"
                    containerStyles="mr-4"
                    color="#F1EDE4"
                    onPress={closeModal}
                  /> : null}
                  <RoundButton 
                    antIconName="check"
                    containerStyles="ml-4"
                    color="#F1EDE4"
                    onPress={handleSubmit}
                  />
                </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  )
}

export default Create;