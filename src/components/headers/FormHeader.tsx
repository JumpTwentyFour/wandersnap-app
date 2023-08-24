import React, {useEffect, useState} from 'react'
import { Pressable, View, Text } from 'react-native'
import Icon from '@/components/Icon'
import { IconSize } from '@/types/icon'
import IconButton from '../pressables/IconButton'
import { ButtonVariant } from '@/types/button'
import Button from '../pressables/Button'

interface FormHeaderProps {
  step: FormStep
}

export enum FormStep {
  TripDetails,
  TripFindLocation,
  TripAddLocation,
  TripUploadImages,
  TripAddLocationImages,
}

function FormHeader (props: FormHeaderProps) {

  const [activeTab, setActiveTab] = useState<FormStep>(props.step)

  useEffect(() => {
    setActiveTab(props.step)
  }, [props.step])

  return (
    <View>
      {activeTab === FormStep.TripDetails ? (
        <View className='flex flex-row items-center justify-between px-5 py-3'>
          <Pressable>
            <Text className='text-[15px] font-mont text-ghost'>Cancel</Text>
          </Pressable>
          <Text className='font-mont text-[17px] text-ghost text-center'>
            Create trip
          </Text>
          <Pressable onPress={() => setActiveTab(FormStep.TripFindLocation)} className='flex flex-row items-center h-8'>
            <Text className='text-[15px] font-mont text-ghost'>Next</Text>
            <Icon size={IconSize.Small} name="ChevronRightIcon" colour='#F9F8FF'/>
          </Pressable>
        </View>
      ): activeTab === FormStep.TripFindLocation ? (
        <View className='flex flex-row items-center px-5 py-3'>
          <View className='flex items-center justify-start w-1/5'>
            <IconButton size={IconSize.Small} icon='ChevronLeftIcon' colour='#F9F8FF' bgClass='bg-none' onPress={() => setActiveTab(FormStep.TripDetails)}/>
          </View>

          <Text className='w-3/5 font-mont text-[17px] text-ghost text-center'>
            Find Location
          </Text>
        </View>
      ): activeTab === FormStep.TripAddLocation ? (
        <View className='flex flex-row items-center justify-between px-5 py-3'>
          <IconButton size={IconSize.Small} icon='ChevronLeftIcon' colour='#F9F8FF' bgClass='bg-none' onPress={() => setActiveTab(FormStep.TripDetails)}/>

          <Text className='font-mont text-[17px] text-ghost w-auto'>
            Add Location
          </Text>
          <View>
            <Button variant={ButtonVariant.Tertiary} label='Save'></Button>
          </View>
        </View>
      ) : 
        (<></>)
      }
    </View>
  )
}

export default FormHeader