// import { StatusBar } from 'expo-status-bar'
// import { Text, View, ScrollView, Image } from 'react-native'
// import { Redirect, router } from 'expo-router'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import icons from '../constants/icons.js'
// import CustomButton from '../components/CustomButton.jsx'

// export default function App() {
//   return (
//     <SafeAreaView className="bg-secondary-default h-full">
//     <ScrollView 
//       contentContainerStyle={{ height: '100%' }}
//     >
//       <View className="w-full flex justify-center items-center h-full px-4">

//         <Text className="text-center text-black text-3xl font-bold">
//           <Text style={{ fontWeight: '900' }}>Stay Organized,</Text>
//           {"\n"}
//           <Text style={{ fontWeight: '900' }}>Stay Productive</Text>
//         </Text>

//         <Image
//           source={icons.undrawToDoList}
//           style={{ width: 361.57, height: 200, marginTop: 30 }}
//           resizeMode="contain"
//         />

//         <Text className="text-center text-black text-xl mt-[50px] px-10">
//           Track tasks, meet goals, and simplify your life with Tape.
//         </Text>

//         <Text className="absolute top-[55px] text-black text-xl font-bold" style={{ fontWeight: '900' }}>
//           tape.
//         </Text>

//         <CustomButton 
//           title="Get Started"
//           handlePress={() => router.push('/SignIn')}
//           containerStyles="mt-[70px] w-[300px] h-[53px] bg-[#73dabf] justify-center items-center"
//         />


//       </View>


//       <Text className="text-center text-black text-3xl font-bold mt-[100px]">
//         <Text style={{ fontWeight: '900' }}>Stay Organized,</Text>
//         {"\n"}
//         <Text style={{ fontWeight: '900' }}>Stay Productive</Text>
//       </Text>

//       <Image
//         source={icons.undrawToDoList}
//         style={{ width: 361.57, height: 200, marginTop: 30 }}
//         resizeMode="contain"
//       />

//       <Text className="text-center text-black text-xl mt-[50px] px-10">
//         Track tasks, meet goals, and simplify your life with Tape.
//       </Text>

//       <TouchableOpacity 
//         onPress={handleGetStarted}  
//         className="w-[356px] h-[53px] bg-[#73dabf] justify-center items-center mt-[150px]"
//       >
//         <Text className="text-black text-lg font-bold">Get Started</Text>
//       </TouchableOpacity> 

//       <Text className="absolute top-[63px] text-black text-2xl font-bold" style={{ fontWeight: '900' }}>
//         tape.
//       </Text>

//       <StatusBar style="auto" />
//     </View>
//   );

//       <StatusBar backgroundColor='#ecf1e4' style='light'/>
//     </ScrollView>
//     </SafeAreaView>
//   )

// }

import { StatusBar } from 'expo-status-bar'
import { Text, View, ScrollView, Image } from 'react-native'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import icons from '../constants/icons.js'
import CustomButton from '../components/CustomButton.jsx'

export default function App() {
  const router = useRouter()

  return (
    <SafeAreaView className="bg-secondary-default h-full">
      <ScrollView>
        <View className="flex-1 bg-[#ecf1e4] items-center min-h-[85vh]">
          <View className="w-full h-8 flex-row justify-center items-center px-4 mt-2">
            <Text className="text-black text-2xl font-bold text-center" style={{ fontWeight: '900' }}>
              tape.
            </Text>
          </View>

          <Text className="text-center text-black text-3xl font-bold mt-[50px]">
            <Text style={{ fontWeight: '900' }}>Stay Organized,</Text>
            {"\n"}
            <Text style={{ fontWeight: '900' }}>Stay Productive</Text>
          </Text>

          <Image
            source={icons.undrawToDoList}
            className="w-[361px] h-[200px] mt-[30px]"
            resizeMode="contain"
          />

          <Text className="text-center text-black text-xl mt-[50px] px-10">
            Track tasks, meet goals, and simplify your life with Tape.
          </Text>

          <CustomButton 
            title="Get Started"
            handlePress={() => router.push('/home')}
            containerStyles="mt-[70px] w-[300px] h-[53px] bg-[#73dabf] justify-center items-center"
          />

          <StatusBar backgroundColor='#ecf1e4' style='light'/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}