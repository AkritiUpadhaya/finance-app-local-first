import { View, Text, StyleSheet, Button, TextInput} from 'react-native'
import React, { useState } from 'react'
import AccountList from '@/components/AccountList'
import AccountListItem from '@/components/AccountListItem'
import database from '@/src/db'

const AccountScreen = () => {
  const[name, setName]= useState('')
  const[cap, setCap]= useState('')
  const[tap, setTap]= useState('')
  const createAccount=()=>{
    console.warn("create account", name)
  }
  const onRead=async ()=>{
    const accountCollection= database.get('accounts');
    const accounts= await accountCollection.query().fetch();
    console.log(accounts)
    // await database.write(async()=>{
    //   await accountCollection.create((account)=>{
    //     account.name= 'Test';
    //     account.cap= 10;
    //     account.tap= 2;
    //   })
    // })
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
     <Button title='Test' onPress={onRead}/>
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