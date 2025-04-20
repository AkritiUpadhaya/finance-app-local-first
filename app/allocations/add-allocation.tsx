import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { router, Stack } from 'expo-router'
import { StyleSheet } from 'react-native'
import database, { accountCollection, allocationCollection } from '@/src/db'
import { withObservables } from '@nozbe/watermelondb/react'
import Account from '@/src/model/Account'

const AddAllocationScreen = ({accounts}:{accounts:Account[]}) => {
  const[income, setIncome]= useState('0')

  const save= async()=>{
    await database.write(async()=>{
      allocationCollection.create(newAllocation=>{
        newAllocation.income= Number.parseFloat(income)

        console.log("saved")
      })
    })
    router.back()
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
      <View style={styles.inputRow}>
        {accounts.map((account)=>(
          <View key={account.id}>
            <Text>{account.name}:{account.cap}%</Text>
            <Text>${(Number.parseFloat(income)*account.cap)/100}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

const enhance= withObservables([], ()=>({
  accounts: accountCollection.query()
}))

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

export default enhance(AddAllocationScreen)