import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import AccountListItem from './AccountListItem'
import { accountCollection } from '@/src/db'
import Account from '@/src/model/Account'

export default function AccountList() {
    const [accounts, setAccounts]= useState<Account[]>([])

    useEffect(()=>{
        const fetchAccounts= async()=>{
            const accounts= await accountCollection.query().fetch();
            setAccounts(accounts)
        }
        fetchAccounts()
        
    }, [])
    console.log(accounts)
  return (
    <>
  <FlatList data={accounts} 
  renderItem={({item})=><AccountListItem account={item}/>} 
  contentContainerStyle={{gap:5}}
  
  />
  </>
  )
}
