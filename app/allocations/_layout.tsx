import { View, Text } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'

export default function AllocationsLayout() {
  return (
    <Stack>
        <Stack.Screen name='index' options={{headerShown:false, title:"Allocations"}}/>
        <Stack.Screen name='add-allocations' options={{headerShown:false, title:"Allocations"}}/>
    </Stack>
  )
}