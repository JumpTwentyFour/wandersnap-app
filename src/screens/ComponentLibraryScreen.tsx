import React from 'react'
import { ScrollView, Text, View } from 'react-native'

import TextInput from '@/components/inputs/TextInput'
import Button from '@/components/pressables/Button'

function ComponentLibraryScreen() {
  return (
    <ScrollView >
      <View className="flex items-center mt-10">
        <Text className='w-1/2 mb-6 font-bold text-center'>Inputs</Text>
        <PurpleBackdrop>
          <Text className='mb-2'>Text input</Text>
          <TextInput placeholder='Enter some text' />

          <Text className='mt-6 mb-2'>Text input with password type</Text>
          <TextInput placeholder='Password' type='password' />
        </PurpleBackdrop>

        <Text className='w-1/2 mt-6 mb-6 font-bold text-center'>Buttons and Anchors</Text>
        {/* develop buttons and anchors here */}
        <Backdrop>
          <Button label='Primary Button' variant='primary' type='solid' onPress={() => console.log('Primary Button pressed')}/>
        </Backdrop>
        <PurpleBackdrop>
          <Button label='Primary Button disabled' variant='primary' type='solid' disabled/>
        </PurpleBackdrop>
        <Backdrop>
          <Button label='Primary Button Outline' variant='primary' type='outline' />
        </Backdrop>
        <Backdrop>
          <Button variant='secondary' label='Secondary Button' type='solid' />
        </Backdrop>
        <PurpleBackdrop>
          <Button variant='secondary' label='Secondary Button disabled' type='solid' disabled/>
        </PurpleBackdrop>
        <PurpleBackdrop>
          <Button variant='secondary' label='Secondary Button Outline' type='outline' />
        </PurpleBackdrop>
        <PurpleBackdrop>
          <Button variant='secondary' label='Secondary Button without style' />
        </PurpleBackdrop>

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
    </ScrollView>
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

function Backdrop(props: { children: React.ReactNode }) {
  return (
    <View className='flex items-center w-full h-auto p-2'>
      <View className='w-4/5 p-2 rounded'>
        {props.children}
      </View>
    </View>
  )
}

ComponentLibraryScreen.title = 'Component Library'

export default ComponentLibraryScreen
