import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import AllocationList from '@/components/AllocationList'

const AllocationScreen = () => {
  return (
    <View>
      
      <Link href={"/allocations/add-allocation"}>Go To New Allocations</Link>
      <AllocationList/>
    </View>
  )
}

export default AllocationScreen