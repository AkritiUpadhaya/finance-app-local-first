import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Account from '@/src/model/Account'
import { withObservables } from '@nozbe/watermelondb/react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import database from '@/src/db';
import { accountCollection } from '@/src/db';

type AccountListItem={
  account: Account
}

export function AccountListItem({account}:AccountListItem) {
  const onDelete=async()=>{
    await database.write(async()=>{
      await account.markAsDeleted()
    })
    
  }
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{account.name}</Text>
      <Text style={styles.percentage}>{account.cap}%</Text>
      <Text style={styles.percentage}>{account.tap}%</Text>
      <MaterialIcons onPress={onDelete} name="delete" size={24} color="black" />
    </View>
  )
}
const enhance= withObservables(['account'],({account}:AccountListItem)=>({
  account:account.observe()
}))
export default enhance(AccountListItem)
const styles= StyleSheet.create({
    container:{
        backgroundColor:'white',
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    name:{
      flex:1,
        fontWeight:'bold',
        fontSize:16
    },
    percentage:{
      flex:1
    }
})