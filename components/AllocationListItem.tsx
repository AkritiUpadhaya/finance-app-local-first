import { View, Text } from 'react-native'
import React from 'react'
import Allocation from '@/src/model/Allocation'

const  AllocationListItem= ({allocation}:{allocation:Allocation})=> {
  return (
    <View>
      <Text>{allocation.createdAt.toString()}</Text>
      <Text>{allocation.income}</Text>
    </View>
  )
}
export default AllocationListItem