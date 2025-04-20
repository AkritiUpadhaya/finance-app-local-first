import { View, Text } from 'react-native'
import React from 'react'
import Allocation from '@/src/model/Allocation'
import { StyleSheet } from 'react-native'

const  AllocationListItem= ({allocation}:{allocation:Allocation})=> {
  return (
    <View style={styles.container}>
      <Text style={styles.created}>{allocation.createdAt.toLocaleDateString()}</Text>
      <Text style={styles.income}>${allocation.income}</Text>
    </View>
  )
}
export default AllocationListItem
const styles= StyleSheet.create({
  container:{
    gap:10,
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10,
    backgroundColor:'gainsboro'
  },
  created:{
    fontSize:24,
    color:'maroon'
  },
  income:{
    fontSize:24,
    color:'green',
    fontWeight:'bold'
  }
})