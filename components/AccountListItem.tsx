import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function AccountListItem() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>profit</Text>
      <Text style={styles.percentage}>10%</Text>
      <Text style={styles.percentage}>20%</Text>
    </View>
  )
}
const styles= StyleSheet.create({
    container:{
        backgroundColor:'white',
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    name:{
        fontWeight:'bold',
        fontSize:16
    },
    percentage:{}
})