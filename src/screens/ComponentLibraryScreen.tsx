import React from 'react'
import cn from 'classnames'
import { Text, View } from 'react-native'

import ScrollView from '@/components/views/ScrollView'
import TextInput from '@/components/inputs/TextInput'
import CalendarInput from '@/components/inputs/CalendarInput'
import ImageInput from '@/components/inputs/ImageInput'
import Button from '@/components/pressables/Button'
import IconButton from '@/components/pressables/IconButton'
import Icon from '@/components/Icon'
import AuthHeader from '@/components/headers/AuthHeader'
import DashboardHeader from '@/components/headers/DashboardHeader'
import TripHeader from '@/components/headers/TripHeader'
import { ButtonType, ButtonVariant } from '@/types/button'
import { IconSize } from '@/types/icon'
import { ImageInputSize } from '@/types/imageInput'

function ComponentLibraryScreen() {
  return (
    <ScrollView className='mt-10'>
      <Text className='w-full my-6 font-bold text-center'>Inputs</Text>
      <Title>Text input</Title>
      <Backdrop bgClass='bg-purple-400'>
        <TextInput placeholder='Enter some text' />
      </Backdrop>

      <Title>Text input with password type</Title>
      <Backdrop bgClass='bg-purple-400'>
        <TextInput placeholder='Password' type='password' />
      </Backdrop>

      <Title>Calendar input</Title>
      <Backdrop bgClass='bg-purple-400'>
        <CalendarInput />
      </Backdrop>

      <Title>Image input - small</Title>
      <Backdrop bgClass='bg-slate-900'>
        <ImageInput size={ImageInputSize.Small} onChange={(images) => console.log(images)} />
      </Backdrop>
      
      <Title>Image input - medium</Title>
      <Backdrop bgClass='bg-slate-900'>
        <ImageInput size={ImageInputSize.Medium} onChange={(images) => console.log(images)} />
      </Backdrop>
      
      <Title>Image input - large</Title>
      <Backdrop bgClass='bg-slate-900'>
        <ImageInput size={ImageInputSize.Large} onChange={(images) => console.log(images)} />
      </Backdrop>

      <Text className='w-full my-6 font-bold text-center'>Buttons and Anchors</Text>
      <Title>Primary buttons</Title>
      <Backdrop>
        <Button label='Primary Button' variant={ButtonVariant.Primary} type={ButtonType.Solid} />
      </Backdrop>
      <Backdrop bgClass='bg-purple-400'>
        <Button label='Primary Button disabled' variant={ButtonVariant.Primary} type={ButtonType.Solid} disabled />
      </Backdrop>
      <Backdrop>
        <Button label='Primary Button Outline' variant={ButtonVariant.Primary} type={ButtonType.Outline} />
      </Backdrop>

      <Title>Seconday buttons</Title>
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

      <Title>Tertiary buttons</Title>
      <Backdrop bgClass="bg-slate-900">
        <Button variant={ButtonVariant.Tertiary} type={ButtonType.Solid} label='Tertiary Button Solid' />
      </Backdrop>
      <Backdrop bgClass="bg-slate-900">
        <Button variant={ButtonVariant.Tertiary} type={ButtonType.Outline} label='Tertiary Button Outlines' />
      </Backdrop>

      <Title>Icon buttons</Title>
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
      <Title>Auth Header</Title>
      <Backdrop bgClass='bg-indigo-400'>
        <AuthHeader />
      </Backdrop>
      <Title>Dashboard Header</Title>
      <Backdrop bgClass='bg-slate-700'>
        <DashboardHeader>
          My trips
        </DashboardHeader>
      </Backdrop>
      <Title>Trip Header</Title>
      <Backdrop bgClass='bg-slate-700/50'>
        <TripHeader />
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

function Title(props: { children: React.ReactNode }) {
  return (
    <Text className='w-full pl-12 text-gray-500 font-mont-bold'>{props.children}</Text>
  )
}

ComponentLibraryScreen.title = 'Component Library'

export default ComponentLibraryScreen
