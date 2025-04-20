import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { Stack } from 'expo-router'
import { StyleSheet } from 'react-native'
import database, { allocationCollection } from '@/src/db'

const AddAllocationScreen = () => {
  const[income, setIncome]= useState('')

  const save= async()=>{
    await database.write(async()=>{
      allocationCollection.create(newAllocation=>{
        newAllocation.income= Number.parseFloat(income)

        console.log("saved")
      })
    })
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{title:'New Allocations'}}/>
      <View style={styles.inputRow}>
        <Text style={styles.label}>Income</Text>
        <TextInput 
        value={income}
        placeholder='$123'
        style={styles.input}
        onChangeText={setIncome}
        />
      </View>
      <Button title='save' onPress={save} />
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    padding:10
  },
  label:{
    fontWeight:'bold',
    width:100
  },
  input:{
    backgroundColor:'white',
    padding:10,
    borderRadius:5,
    flex:1
  },
  inputRow:{
    flexDirection:'row',
    alignItems:'center',
    gap:10
  }

})

export default AddAllocationScreen