import React from 'react'
import cn from 'classnames'
import { Text, View } from 'react-native'

import ScrollView from '@/components/views/ScrollView'
import TextInput from '@/components/inputs/TextInput'
import CalendarInput from '@/components/inputs/CalendarInput'
import Button from '@/components/pressables/Button'

function ComponentLibraryScreen() {
  return (
    <ScrollView className='mt-10'>
      <Text className='w-full mb-6 font-bold text-center'>Inputs</Text>
      <Backdrop bgClass='bg-purple-400'>
        <Text className='mb-2'>Text input</Text>
        <TextInput placeholder='Enter some text' />

        <Text className='mt-6 mb-2'>Text input with password type</Text>
        <TextInput placeholder='Password' type='password' />
        
        <Text className='mt-6 mb-2'>Calendar input</Text>
        <CalendarInput />
      </Backdrop>

      <Text className='w-full mt-6 mb-6 font-bold text-center'>Buttons and Anchors</Text>
      <Backdrop>
        <Button label='Primary Button' variant='primary' type='solid' onPress={() => console.log('Primary Button pressed')}/>
      </Backdrop>
      <Backdrop bgClass='bg-purple-400'>
        <Button label='Primary Button disabled' variant='primary' type='solid' disabled/>
      </Backdrop>
      <Backdrop>
        <Button label='Primary Button Outline' variant='primary' type='outline' />
      </Backdrop>
      <Backdrop>
        <Button variant='secondary' label='Secondary Button' type='solid' />
      </Backdrop>
      <Backdrop bgClass='bg-purple-400'>
        <Button variant='secondary' label='Secondary Button disabled' type='solid' disabled/>
      </Backdrop>
      <Backdrop bgClass='bg-purple-400'>
        <Button variant='secondary' label='Secondary Button Outline' type='outline' />
      </Backdrop>

      <Text className='w-full mt-6 mb-6 font-bold text-center'>Calendar</Text>
      <Backdrop>
        {/* <Calendar /> */}
      </Backdrop>

      <Text className='w-full mt-6 mb-6 font-bold text-center'>Headers</Text>
      {/* develop headers here */}

      <Text className='w-full mt-6 mb-6 font-bold text-center'>Listings</Text>
      {/* develop listings here */}

      <Text className='w-full mt-6 mb-6 font-bold text-center'>Drawers</Text>
      {/* develop drawers here */}

      <Text className='w-full mt-6 mb-6 font-bold text-center'>Tabs</Text>
      {/* develop tabs here */}

      <Text className='w-full mt-6 mb-6 font-bold text-center'>Overlay</Text>
      {/* develop overlay here */}

      <Text className='w-full mt-6 mb-6 font-bold text-center'>Map</Text>
      {/* develop map here */}

      <Text className='w-full mt-6 mb-6 font-bold text-center'>Wizard</Text>
      {/* develop wizard here */}
    </ScrollView>
  )
}

/**
 * This is a helper component to allow white or light coloured components
 * to be easily viewable.
 */
function Backdrop(props: { children: React.ReactNode, bgClass?: string }) {
  return (
    <View className='flex items-center w-full h-auto p-2'>
      <View className={cn('w-4/5 p-2 rounded', props.bgClass)}>
        {props.children}
      </View>
    </View>
  )
}

ComponentLibraryScreen.title = 'Component Library'

export default ComponentLibraryScreen
