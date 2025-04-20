import { View, Text, FlatList } from 'react-native'
import React from 'react'
import AllocationListItem from './AllocationListItem'
import { withObservables } from '@nozbe/watermelondb/react'
import { allocationCollection } from '@/src/db'
import Allocation from '@/src/model/Allocation'

export  function AllocationList({allocations}:{allocations: Allocation[]}) {
    console.log('Allocations', allocations)
    return (
    <View>
      <FlatList data={allocations} renderItem={({item})=><AllocationListItem allocation={item}/>} />
    </View>
  )
}

const enhance= withObservables([], ()=>({
    allocations: allocationCollection.query().observe()
}))
export default enhance(AllocationList)