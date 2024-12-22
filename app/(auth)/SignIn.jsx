import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../../components/CustomButton'
import FormField from '../../components/FormField'
import { Link } from 'expo-router'

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const [ isSubmitting, setIsSubmitting] = useState(false)

  const submit = () => {

  }

  return (
    <SafeAreaView className="bg-secondary-default h-full">
      <ScrollView>
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
        <View className="flex flex-col px-12 pt-10 w-full text-xl min-h-[85vh] bg-secondary-default">
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
          />
          <CustomButton 
            title='Sign In'
            handlePress={submit}
            containerStyles='mt-7 bg-[#cacaca]'
            isLoading={isSubmitting}
          />

          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className='text-lg text-gray-dark-100 font-pregular'>
              Don't have an account?
            </Text>
            <Link href='/SignUp'
            className='text-lg font-psemibold text-blaxk-light-71'>
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn