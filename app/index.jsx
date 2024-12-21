import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import {Link} from 'expo-router'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-primary">
      <Text className="text-[96px] color-secondary-default font-pbold">tape.</Text>
<<<<<<< Updated upstream
      <StatusBar style='auto'/>
      <Link href="/home" style={{ color: 'green'}}>Go to Home</Link>
=======
      <StatusBar style='light'/>
      <Link href="/SignIn" style={{ color: 'green'}}>Go to Sign</Link>
>>>>>>> Stashed changes
    </View>
  );
}
