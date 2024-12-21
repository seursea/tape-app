import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router'; 

export default function App() {
  const router = useRouter(); 

  const handleGetStarted = () => {
    router.push('/home');  
  };

  return (
    <View className="flex-1 bg-[#ecf1e4] items-center relative">
      <View className="w-full h-8 flex-row justify-between items-center px-4 mt-2">
        <View className="flex-row space-x-2">
          <View className="w-5 h-5 bg-transparent"></View>
          <View className="w-5 h-5 bg-transparent"></View>
          <View className="w-6 h-6 bg-transparent"></View>
        </View>
      </View>

      <Text className="text-center text-black text-3xl font-bold mt-[100px]">
        <Text style={{ fontWeight: 'bold' }}>Stay Organized,</Text>
        {"\n"}
        <Text style={{ fontWeight: 'bold' }}>Stay Productive</Text>
      </Text>

      <Image
        source={require('./assets/images/undraw_to-do-list_dzdz.png')} 
        style={{ width: 200, height: 200, marginTop: 20 }} 
      />


      <Text className="text-center text-black text-xl mt-[50px] px-10">
        Track tasks, meet goals, and simplify your life with Tape.
      </Text>

      <TouchableOpacity 
        onPress={handleGetStarted}  
        className="w-[356px] h-[53px] bg-[#73dabf] border border-black justify-center items-center mt-[150px]"
      >
        <Text className="text-black text-lg font-bold">Get Started</Text>
      </TouchableOpacity>

      <Text className="absolute top-[63px] text-black text-2xl font-bold" style={{ fontWeight: 'bold' }}>
        tape.
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}
