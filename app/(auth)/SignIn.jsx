import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

// import { icons } from '../../constants/icons'
import FormField from '../../components/FormField'

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  return (
    <SafeAreaView className="bg-secondary-default h-full">
      <ScrollView>
        {/* <View className='w-full justify center h-full px-4 my-6'>
          <Text className='text-3xl text-primary font-pbold mt-10'>
            Sign in to your Account
          </Text>
        </View> */}
        <View className='flex flex-col pt-2 pb-8 mx-auto w-full bg-primary'>
          <View className='self-center mt-5'>
            <Text className='text-1xl font-pbold text-secondary-default'>tape.</Text>
          </View>
          <View className='mt-5 ml-7'>
            <Text className='text-3xl font-pbold text-secondary-default'>
              Sign in to your Account
            </Text>
          </View>
          
        </View>
        <View className="flex flex-col px-12 pt-10 w-full text-xl">
          <FormField 
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ 
              ...form,
              email: e
            })}
            otherStyles='mt-7'
            keyboardType='email-address'
          />

          <FormField 
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ 
              ...form,
              password: e
            })}
            otherStyles='mt-7'
            keyboardType='email-address'
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn