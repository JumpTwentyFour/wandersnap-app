import React from 'react'
import { Text, View } from 'react-native'
import Counter from '../components/Counter'

function ComponentLibraryScreen() {
  return (
    <View className="flex items-center mt-10">
      <Text className='w-1/2 text-center mb-6 font-bold'>Inputs</Text>
      {/* develop inputs here */}

      <Text className='w-1/2 text-center mb-6 font-bold mt-6'>Buttons and Anchors</Text>
      {/* develop buttons and anchors here */}

      <Text className='w-1/2 text-center mb-6 font-bold mt-6'>Headers</Text>
      {/* develop headers here */}

      <Text className='w-1/2 text-center mb-6 font-bold mt-6'>Listings</Text>
      {/* develop listings here */}

      <Text className='w-1/2 text-center mb-6 font-bold mt-6'>Drawers</Text>
      {/* develop drawers here */}

      <Text className='w-1/2 text-center mb-6 font-bold mt-6'>Tabs</Text>
      {/* develop tabs here */}

      <Text className='w-1/2 text-center mb-6 font-bold mt-6'>Overlay</Text>
      {/* develop overlay here */}

      <Text className='w-1/2 text-center mb-6 font-bold mt-6'>Map</Text>
      {/* develop map here */}

      <Text className='w-1/2 text-center mb-6 font-bold mt-6'>Wizard</Text>
      {/* develop wizard here */}
    </View>
  )
}

ComponentLibraryScreen.title = 'Component Library'

export default ComponentLibraryScreen
