import { View, Text, StyleSheet, Button, TextInput, ScrollView} from 'react-native'
import React, { useState } from 'react'
import AccountList from '@/components/AccountList'
import AccountListItem from '@/components/AccountListItem'
import database from '@/src/db'
import Account from '@/src/model/Account'
import { accountCollection } from '@/src/db'

const AccountScreen = () => {
  const[name, setName]= useState('')
  const[cap, setCap]= useState('')
  const[tap, setTap]= useState('')

  const createAccount= async()=>{
    console.warn("create account", name)
    await database.write(async()=>{
      await accountCollection.create((account)=>{
        account.name= name
        account.cap= Number.parseFloat(cap)
        account.tap= Number.parseFloat(tap)
      })
    })
    setName('');
    setCap('');
    setTap('');

  }
  const onDelete=async()=>{
    await database.write(async()=>{
      const accounts= await accountCollection.query().fetch()
      const account= accounts[1]
      account.destroyPermanently()
    })
  }
  // const onRead=async ()=>{
  //   // console.log(accounts)
  // }

  // const onTest= async()=>{
  //   await database.write(async()=>{
  //     const accounts = await accountCollection.query().fetch();
  //     const account= accounts[0]
  //     account.update((updatedAccount)=>{
  //       updatedAccount.name= "54321";

  //     })
  //   })
  // }
  return (
    <View style={{flex:1}}>
      {/* <Text>Account</Text> */}
      <View style={styles.headingContainer}>
        <Text>Name</Text>
        <Text>CAP</Text>
        <Text>TAP</Text>
      </View>
     <AccountList/>
     <View style={styles.inputContainer}>
      <View style={styles.heading}>
      <TextInput value={name} onChangeText={setName} placeholder='Name'/>
      <TextInput value={cap} onChangeText={setCap} placeholder='CAP'/>
      <TextInput value={tap} onChangeText={setTap} placeholder='TAP'/>
      </View>
     </View>
     <Button title='Add account' onPress={createAccount}/>
     <Button title='Delete' onPress={onDelete}/>
    </View>
  )
}

export default AccountScreen
const styles= StyleSheet.create({
  headingContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:5
  },
  heading:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10,
    backgroundColor:'white'
  },
  inputContainer:{
    padding:10,
    gap:10
  },
  input:{
    flex:1,
    marginHorizontal:5,
    padding:5,
    borderWidth:1,
    borderColor:'#ccc',
    borderRadius:5
  }

})