import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
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

const TabsLayout = () => {
  return (
    <>
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
          },
          tabBarItemStyle: {
            alignItems: 'center',
            justifyContent: 'center'
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
                name="Home" 
                focused={focused} 
              />
            )
          }}
        />
        <Tabs.Screen 
          name="create"
          options={{
            title: 'Create',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={icons.add} 
                name="Create"
                color={color} 
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