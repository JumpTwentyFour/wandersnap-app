import React from 'react'
import { Text, View } from 'react-native'

import TextInput from '../components/inputs/TextInput'

function ComponentLibraryScreen() {
  return (
    <View className="flex items-center mt-10">
      <Text className='w-1/2 mb-6 font-bold text-center'>Inputs</Text>
      <PurpleBackdrop>
        <TextInput placeholder='Enter some text' />
      </PurpleBackdrop>

      <Text className='w-1/2 mt-6 mb-6 font-bold text-center'>Buttons and Anchors</Text>
      {/* develop buttons and anchors here */}

      <Text className='w-1/2 mt-6 mb-6 font-bold text-center'>Headers</Text>
      {/* develop headers here */}

      <Text className='w-1/2 mt-6 mb-6 font-bold text-center'>Listings</Text>
      {/* develop listings here */}

      <Text className='w-1/2 mt-6 mb-6 font-bold text-center'>Drawers</Text>
      {/* develop drawers here */}

      <Text className='w-1/2 mt-6 mb-6 font-bold text-center'>Tabs</Text>
      {/* develop tabs here */}

      <Text className='w-1/2 mt-6 mb-6 font-bold text-center'>Overlay</Text>
      {/* develop overlay here */}

      <Text className='w-1/2 mt-6 mb-6 font-bold text-center'>Map</Text>
      {/* develop map here */}

      <Text className='w-1/2 mt-6 mb-6 font-bold text-center'>Wizard</Text>
      {/* develop wizard here */}
    </View>
  )
}

/**
 * This is a helper component to allow white or light coloured components
 * to be easily viewable.
 */
function PurpleBackdrop(props: { children: React.ReactNode }) {
  return (
    <View className='flex items-center w-full h-auto p-2'>
      <View className='w-4/5 p-2 bg-purple-400 rounded'>
        {props.children}
      </View>
    </View>
  )
}

ComponentLibraryScreen.title = 'Component Library'

export default ComponentLibraryScreen
