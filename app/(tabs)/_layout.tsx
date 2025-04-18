import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
const RootLayout = () => {
  return (
   <Tabs>
    <Tabs.Screen name="index" options={{title:"Allocations", tabBarIcon:({color, size}) => (
      <MaterialIcons name="manage-accounts" size={24} color="black" />
    )}}/>
    <Tabs.Screen name="account" options={{title:"Accounts", tabBarIcon:({color, size}) => (
      <MaterialIcons name="account-tree" size={24} color="black" />
    )}}/>
   </Tabs>
  );
}

export default RootLayout