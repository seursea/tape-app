import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import icons from '../../constants/icons.js';
import CustomButton from '../../components/CustomButton.jsx';

const Create = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
  });

  return (
    <SafeAreaView className="flex-1 bg-secondary-default">

      <View className="flex-row justify-between items-center w-full px-4 py-4">
        <TouchableOpacity 
          onPress={() => router.back()}
          className="w-10 h-10 items-center justify-center"
        >
          <Image 
            source={icons.back}
            className="w-6 h-6"
            resizeMode="contain"
          />
        </TouchableOpacity>
        
        <Text className="text-xl font-pbold text-black-light">
          Create Task
        </Text>

        <View className="w-10 h-10" />
      </View>

      <ScrollView className="flex-1 px-4">
        <View className="space-y-4">
          <View className="space-y-2">
            <Text className="text-base font-pmedium text-black-light">Title</Text>
            <TextInput 
              className="w-full h-12 px-4 bg-gray-light rounded-lg"
              placeholder="Enter task title"
              value={form.title}
              onChangeText={(text) => setForm({...form, title: text})}
            />
          </View>

          <View className="space-y-2">
            <Text className="text-base font-pmedium text-black-light">Description</Text>
            <TextInput 
              className="w-full h-24 px-4 py-2 bg-gray-light rounded-lg"
              placeholder="Enter task description"
              multiline
              value={form.description}
              onChangeText={(text) => setForm({...form, description: text})}
            />
          </View>

          <View className="flex-row space-x-4">
            <View className="flex-1 space-y-2">
              <Text className="text-base font-pmedium text-black-light">Date</Text>
              <TextInput 
                className="w-full h-12 px-4 bg-gray-light rounded-lg"
                placeholder="MM/DD/YYYY"
                value={form.date}
                onChangeText={(text) => setForm({...form, date: text})}
              />
            </View>

            <View className="flex-1 space-y-2">
              <Text className="text-base font-pmedium text-black-light">Time</Text>
              <TextInput 
                className="w-full h-12 px-4 bg-gray-light rounded-lg"
                placeholder="HH:MM"
                value={form.time}
                onChangeText={(text) => setForm({...form, time: text})}
              />
            </View>
          </View>

          <CustomButton 
            title="Create Task"
            handlePress={() => console.log('Create Task')}
            containerStyles="mt-8"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Create;