import { View, Text, FlatList } from 'react-native'
import React from 'react'
import AllocationListItem from './AllocationListItem'
import { withObservables } from '@nozbe/watermelondb/react'
import { allocationCollection } from '@/src/db'
import Allocation from '@/src/model/Allocation'
import { Q } from '@nozbe/watermelondb'

export  function AllocationList({allocations}:{allocations: Allocation[]}) {
    console.log('Allocations', allocations)
    return (
    <View>
      <FlatList 
      data={allocations} 
      contentContainerStyle={{gap:10, padding:10}}
      renderItem={({item})=><AllocationListItem allocation={item}/>} />
    </View>
  )
}

const enhance= withObservables([], ()=>({
    allocations: allocationCollection.query(Q.sortBy('created_at', Q.desc)).observe()
}))
export default enhance(AllocationList)