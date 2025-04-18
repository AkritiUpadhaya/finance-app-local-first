import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const AllocationScreen = () => {
  return (
    <View>
      <Text>Allocation</Text>
      <Link href="/account">Go to Account</Link>
    </View>
  )
}

export default AllocationScreen