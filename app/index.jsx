import { StatusBar } from 'expo-status-bar'
import { Text, View, ScrollView, Image } from 'react-native'
import { Redirect, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import icons from '../constants/icons.js'
import CustomButton from '../components/CustomButton.jsx'

export default function App() {
  return (
    <SafeAreaView className="bg-secondary-default h-full">
    <ScrollView 
      contentContainerStyle={{ height: '100%' }}
    >
      <View className="w-full flex justify-center items-center h-full px-4">

        <Text className="text-center text-black text-3xl font-bold">
          <Text style={{ fontWeight: '900' }}>Stay Organized,</Text>
          {"\n"}
          <Text style={{ fontWeight: '900' }}>Stay Productive</Text>
        </Text>

        <Image
          source={icons.undrawToDoList}
          style={{ width: 361.57, height: 200, marginTop: 30 }}
          resizeMode="contain"
        />

        <Text className="text-center text-black text-xl mt-[50px] px-10">
          Track tasks, meet goals, and simplify your life with Tape.
        </Text>

        <Text className="absolute top-[55px] text-black text-xl font-bold" style={{ fontWeight: '900' }}>
          tape.
        </Text>

        <CustomButton 
          title="Get Started"
          handlePress={() => router.push('/SignIn')}
          containerStyles="mt-[70px] w-[300px] h-[53px] bg-[#73dabf] justify-center items-center"
        />


      </View>
      <StatusBar backgroundColor='#ecf1e4' style='light'/>
    </ScrollView>
    </SafeAreaView>
  )
}