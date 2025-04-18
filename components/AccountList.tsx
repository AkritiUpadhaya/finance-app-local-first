import { View, Text, FlatList } from 'react-native'
import React from 'react'
import AccountListItem from './AccountListItem'

export default function AccountList() {
  return (
    <>
  <FlatList data={[1,2,3]} renderItem={()=><AccountListItem/>} />;
  </>
  )
}
