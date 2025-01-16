import React from 'react';
import { 
  View, 
  Text, 
  SafeAreaView,
  TouchableOpacity, 
  ScrollView,
  Image
} from 'react-native';
import { useRouter } from 'expo-router';
import icons from '../../constants/icons.js';

const Profile = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-secondary-default">
      <View className="flex-row justify-between items-center w-full px-4 py-4">
        <Text className="text-xl font-pbold text-black-light">Profile</Text>
      </View>

      <ScrollView className="flex-1 px-4">
        <View className="items-center mt-4">
          <Image 
            source={icons.prof}
            className="w-24 h-24 rounded-full"
            resizeMode="cover"
          />
          <Text className="text-xl font-pbold text-black-light mt-4">
            John Doe
          </Text>
          <Text className="text-base text-black-light opacity-70">
            johndoe@email.com
          </Text>
        </View>

        <View className="mt-8 space-y-4">
          <TouchableOpacity 
            className="flex-row items-center space-x-4 p-4 bg-gray-light rounded-lg"
            onPress={() => router.push('/settings')} 
          >
            <Text className="text-base font-pmedium text-black-light">Settings</Text>
          </TouchableOpacity>

          {/* Logout button */}
          <TouchableOpacity className="flex-row items-center space-x-4 p-4 bg-gray-light rounded-lg">
            <Text className="text-base font-pmedium text-black-light">Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
