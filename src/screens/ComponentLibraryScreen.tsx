import React from 'react'
import { Text, View } from 'react-native'
import cn from 'classnames'

import ScrollView from '@/components/views/ScrollView'
import TextInput from '@/components/inputs/TextInput'
import Button from '@/components/pressables/Button'
import { ButtonType, ButtonVariant } from '@/types/button'

function ComponentLibraryScreen() {
  return (
    <ScrollView className='mt-10'>
      <Text className='w-full my-6 font-bold text-center'>Inputs</Text>
      <Backdrop bgClass='bg-purple-400'>
        <Text className='mb-2'>Text input</Text>
        <TextInput placeholder='Enter some text' />

        <Text className='mt-6 mb-2'>Text input with password type</Text>
        <TextInput placeholder='Password' type='password' />
      </Backdrop>

      <Text className='w-full my-6 font-bold text-center'>Buttons and Anchors</Text>
      {/* develop buttons and anchors here */}
      <Backdrop>
        <Button label='Primary Button' variant={ButtonVariant.Primary} type={ButtonType.Solid} onPress={() => console.log('Primary Button pressed')}/>
      </Backdrop>
      <Backdrop bgClass='bg-purple-400'>
        <Button label='Primary Button disabled' variant={ButtonVariant.Primary} type={ButtonType.Solid} disabled/>
      </Backdrop>
      <Backdrop>
        <Button label='Primary Button Outline' variant={ButtonVariant.Primary} type={ButtonType.Outline} />
      </Backdrop>
      <Backdrop>
        <Button variant={ButtonVariant.Secondary} type={ButtonType.Solid} label='Secondary Button' />
      </Backdrop>
      <Backdrop bgClass='bg-purple-400'>
        <Button variant={ButtonVariant.Secondary} type={ButtonType.Solid} label='Secondary Button disabled' disabled />
      </Backdrop>
      <Backdrop bgClass='bg-purple-400'>
        <Button variant={ButtonVariant.Secondary} type={ButtonType.Outline} label='Secondary Button Outline' />
      </Backdrop>
      <Backdrop bgClass='bg-purple-400'>
        <Button variant={ButtonVariant.Secondary} label='Secondary Button without style' />
      </Backdrop>
      <Backdrop bgClass="bg-slate-900">
        <Button variant={ButtonVariant.Tertiary} type={ButtonType.Solid} label='Tertiary Button Solid' />
      </Backdrop>
      <Backdrop bgClass="bg-slate-900">
        <Button variant={ButtonVariant.Tertiary} type={ButtonType.Outline} label='Tertiary Button Outline' />
      </Backdrop>

      <Text className='w-full my-6 font-bold text-center'>Headers</Text>
      {/* develop headers here */}

      <Text className='w-full my-6 font-bold text-center'>Listings</Text>
      {/* develop listings here */}

      <Text className='w-full my-6 font-bold text-center'>Drawers</Text>
      {/* develop drawers here */}

      <Text className='w-full my-6 font-bold text-center'>Tabs</Text>
      {/* develop tabs here */}

      <Text className='w-full my-6 font-bold text-center'>Overlay</Text>
      {/* develop overlay here */}

      <Text className='w-full my-6 font-bold text-center'>Map</Text>
      {/* develop map here */}

      <Text className='w-full my-6 font-bold text-center'>Wizard</Text>
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
