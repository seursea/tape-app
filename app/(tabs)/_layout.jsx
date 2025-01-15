import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { Tabs, Redirect } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import icons from '../../constants/icons'

const TabIcon = ({ icon, color, name, focused }) => {
  
  return (
    <View className="items-center justify-center h-14 w-14">
      <Image 
        source={icon}
        resizeMode='contain'
        style={{  
          tintColor: color,
        }}
        className="w-5 h-5"
      />
      <Text 
        className={`text-xs mt-1 ${focused ? "font-semibold" : "font-normal"}`}
        style={{ 
          color: color 
        }}
      >
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = ({}) => {
  return (
    <>
      <StatusBar backgroundColor='#ecf1e4' style='dark'/>
      <Tabs
  screenOptions={{
    tabBarShowLabel: false,
    tabBarActiveTintColor: '#1E1E1E',
    tabBarInactiveTintColor: '#F1EDE4',
    tabBarStyle: {
      backgroundColor: "#73DAC0",
      borderTopWidth: 1,
      borderTopColor: "#CDCDE0",
      height: 65,
      paddingTop: 13,
      paddingBottom: 10,
      paddingHorizontal: 10,
    }
  }}
>
  <Tabs.Screen 
    name="home"
    options={{
      title: 'Home',
      headerShown: false,
      tabBarIcon: ({ color, focused }) => (
        <TabIcon 
          icon={icons.todo} 
          color={color} 
          name="Notes" 
          focused={focused} 
        />
      )
    }}
  />
  <Tabs.Screen 
    name="profile"
    options={{
      title: 'Profile',
      headerShown: false,
      tabBarIcon: ({ color, focused }) => (
        <TabIcon 
          icon={icons.prof} 
          color={color} 
          name="Profile" 
          focused={focused} 
        />
      )
    }}
  />
</Tabs>
      
    </>
  )
}

export default TabsLayout