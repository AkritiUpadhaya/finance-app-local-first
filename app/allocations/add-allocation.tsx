import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AddAllocationScreen = () => {
  return (
    <View>
      <Stack.Screen options={{title:'New Allocations'}}/>
      <Text>Add Allocation</Text>
    </View>
  )
}

export default AddAllocationScreen