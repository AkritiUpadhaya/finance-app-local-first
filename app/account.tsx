import { View, Text, StyleSheet, Button, TextInput} from 'react-native'
import React, { useState } from 'react'
import AccountList from '@/components/AccountList'
import AccountListItem from '@/components/AccountListItem'

const AccountScreen = () => {
  const[name, setName]= useState('')
  const[cap, setCap]= useState('')
  const[tap, setTap]= useState('')
  const createAccount=()=>{
    console.warn("create account", name)
  }
  return (
    <View style={{gap:5}}>
      {/* <Text>Account</Text> */}
      <View style={styles.headingContainer}>
        <Text>Name</Text>
        <Text>CAP</Text>
        <Text>TAP</Text>
      </View>
     <AccountList/>
     <View style={styles.headingContainer}>
      <TextInput value={name} onChangeText={setName} placeholder='Name'/>
      <TextInput value={cap} onChangeText={setCap} placeholder='CAP'/>
      <TextInput value={cap} onChangeText={setTap} placeholder='TAP'/>
     </View>
     <Button title='Add account' onPress={createAccount}/>
    </View>
  )
}

export default AccountScreen
const styles= StyleSheet.create({
  headingContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:5
  }
})