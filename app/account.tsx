import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import AccountList from '@/components/AccountList'
import AccountListItem from '@/components/AccountListItem'

const AccountScreen = () => {
  return (
    <View style={{gap:5}}>
      {/* <Text>Account</Text> */}
      <View style={styles.headingContainer}>
        <Text>Name</Text>
        <Text>CAP</Text>
        <Text>TAP</Text>
      </View>
     <AccountList/>
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