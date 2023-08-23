import React from 'react'
import { Text, View } from 'react-native'
import cn from 'classnames'

import ScrollView from '@/components/views/ScrollView'
import TextInput from '@/components/inputs/TextInput'
import Button from '@/components/pressables/Button'
import { ButtonType, ButtonVariant } from '@/types/button'
import IconButton from '@/components/pressables/IconButton'
import Icon from '@/components/Icon/Icon'
import AuthHeader from '@/components/headers/AuthHeader'
import { IconSize } from '@/types/icon'
import DashboardHeader from '@/components/headers/DashboardHeader'

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
        <Button variant={ButtonVariant.Tertiary} type={ButtonType.Outline} label='Tertiary Button Outlines' />
      </Backdrop>
      <View className='flex flex-row items-center my-1 justify-evenly'>
        <IconButton bgClass='bg-purple-400' icon='EyeSlashIcon' size={IconSize.Small} colour='#F9F8FF'/>
        <IconButton bgClass='bg-purple-400' icon='ChevronLeftIcon' size={IconSize.Medium} colour='#F9F8FF'/>
        <IconButton bgClass='bg-purple-400' icon='EllipsisIcon' size={IconSize.Large} colour='#F9F8FF'/>
      </View>
      <View className='flex flex-row items-center my-1 justify-evenly'>
        <IconButton bgClass='bg-slate-900' icon='GridIcon' size={IconSize.Small} colour='#F9F8FF'/>
        <IconButton bgClass='bg-slate-900' icon='PlusIcon' size={IconSize.Medium} colour='#F9F8FF'/>
        <IconButton bgClass='bg-slate-900' icon='MapIcon' size={IconSize.Large} colour='#F9F8FF'/>
      </View>
      <View className='flex flex-row items-center my-1 justify-evenly'>
        <IconButton bgClass='bg-blue-700' icon='EyeIcon' size={IconSize.Small} colour='#F9F8FF'/>
        <IconButton bgClass='bg-blue-700' icon='ImageIcon' size={IconSize.Medium} colour='#F9F8FF'/>
        <IconButton bgClass='bg-blue-700' icon='UserIcon' size={IconSize.Large} colour='#F9F8FF'/>
      </View>
      
      <Text className='w-full my-6 font-bold text-center'>Icons</Text>
      <View className='flex items-center w-full h-auto p-2'>
        <View className={'w-4/5 p-2 rounded flex flex-row items-center justify-evenly flex-wrap'}>
          <Icon name='EyeIcon' size={IconSize.Medium} colour='#7E5BFF'/>
          <Icon name='EyeSlashIcon' size={IconSize.Medium} colour='#7E5BFF'/>
          <Icon name='CameraIcon' size={IconSize.Medium} colour='#7E5BFF'/>
          <Icon name='CalendarIcon' size={IconSize.Medium} colour='#7E5BFF'/>
          <Icon name='CheckmarkIcon' size={IconSize.Medium} colour='#7E5BFF'/>
          <Icon name='ChevronLeftIcon' size={IconSize.Medium} colour='#7E5BFF'/>
          <Icon name='ChevronRightIcon' size={IconSize.Medium} colour='#7E5BFF'/>
          <Icon name='ChevronUpIcon' size={IconSize.Medium} colour='#7E5BFF'/>
          <Icon name='ChevronDownIcon' size={IconSize.Medium} colour='#7E5BFF'/>
          <Icon name='ExclamationCircleIcon' size={IconSize.Medium} colour='#7E5BFF'/>
          <Icon name='EllipsisIcon' size={IconSize.Medium} colour='#7E5BFF'/>
          <Icon name='EllipsisCircleIcon' size={IconSize.Medium} colour='#7E5BFF'/>
          <Icon name='LockIcon' size={IconSize.Medium} colour='#7E5BFF'/>
          <Icon name='PhotoIcon' size={IconSize.Medium} colour='#7E5BFF'/>
          <Icon name='PlusIcon' size={IconSize.Medium} colour='#7E5BFF'/>
          <Icon name='PlusCircleIcon' size={IconSize.Medium} colour='#7E5BFF'/>
          <Icon name='MapIcon' size={IconSize.Medium} colour='#7E5BFF'/>
          <Icon name='GridIcon' size={IconSize.Medium} colour='#7E5BFF'/>
          <Icon name='UserIcon' size={IconSize.Medium} colour='#7E5BFF'/>
          <Icon name='ImageIcon' size={IconSize.Medium} colour='#7E5BFF'/>
          <Icon name='PinIcon' size={IconSize.Medium} colour='#7E5BFF'/>
          <Icon name='PersonIcon' size={IconSize.Medium} colour='#7E5BFF'/>
          <Icon name='TrashIcon' size={IconSize.Medium} colour='#7E5BFF'/>
          <Icon name='SearchIcon' size={IconSize.Medium} colour='#7E5BFF'/>
          <Icon name='XMarkIcon' size={IconSize.Medium} colour='#7E5BFF'/>
          <Icon name='XMarkCircleIcon' size={IconSize.Medium} colour='#7E5BFF'/>
        </View>
      </View>

      <Text className='w-full my-6 font-bold text-center'>Headers</Text>
      <Backdrop bgClass='bg-indigo-400'>
        <AuthHeader />
      </Backdrop>

      <Backdrop bgClass='bg-slate-700'>
        <DashboardHeader>
          My trips
        </DashboardHeader>
      </Backdrop>

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
