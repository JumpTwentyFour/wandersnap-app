import React from 'react'
import { Text, View } from 'react-native'

import TextInput from '../components/inputs/TextInput'

function ComponentLibraryScreen() {
  return (
    <View className="flex items-center mt-10">
      <Text className='w-1/2 text-center mb-6 font-bold'>Inputs</Text>
      <PurpleBackdrop>
        <Text className='mb-2'>Text input</Text>
        <TextInput placeholder='Enter some text' />

        <Text className='mb-2 mt-6'>Text input with password type</Text>
        <TextInput placeholder='Password' type='password' />
      </PurpleBackdrop>

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

/**
 * This is a helper component to allow white or light coloured components
 * to be easily viewable.
 */
function PurpleBackdrop(props: { children: React.ReactNode }) {
  return (
    <View className='w-full h-auto p-2 flex items-center'>
      <View className='w-4/5 bg-purple-400 p-2 rounded'>
        {props.children}
      </View>
    </View>
  )
}

ComponentLibraryScreen.title = 'Component Library'

export default ComponentLibraryScreen
