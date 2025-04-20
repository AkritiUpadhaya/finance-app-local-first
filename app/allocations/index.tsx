import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import AllocationList from '@/components/AllocationList'
import { StyleSheet } from 'react-native'

const AllocationScreen = () => {
  return (
    <View>
      
      <Link href={"/allocations/add-allocation"} asChild>
      <Text style={styles.header}>New Allocations</Text>
      </Link>
      <AllocationList/>
    </View>
  )
}

export default AllocationScreen

const styles= StyleSheet.create({
  header:{
    padding:10,
    textAlign:'center',
    backgroundColor:'green',
    fontSize:20,
    fontWeight:'bold',
    color:'white'
  }
})