import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import AccountListItem from './AccountListItem'
import { accountCollection } from '@/src/db'
import Account from '@/src/model/Account'
import {withObservables} from '@nozbe/watermelondb/react'

export function AccountList({accounts}:{accounts:Account[]}) {
    
  return (
    <>
  <FlatList data={accounts} 
  renderItem={({item})=><AccountListItem account={item}/>} 
  contentContainerStyle={{gap:5}}
  
  />
  </>
  )
}

const enhance= withObservables([], ()=>({
    accounts:accountCollection.query()
}))
export default enhance(AccountList);
;