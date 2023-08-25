import React, { useEffect, useState } from 'react'
import { Pressable, View, Text } from 'react-native'
import Icon from '@/components/Icon'
import IconButton from '@/components/pressables/IconButton'
import Toggle from '@/components/pressables/Toggle'
import { IconSize } from '@/types/icon'
import { FormHeaderProps, FormStep } from '@/types/formHeader'

function FormHeader(props: FormHeaderProps) {
  const [activeTab, setActiveTab] = useState<FormStep>(props.step)
  const [toggleValue, setToggleValue] = useState(false)

  useEffect(() => {
    setActiveTab(props.step)
  }, [props.step])

  return (
    <View>
      {activeTab === FormStep.TripDetails ? (
        <View className="flex flex-row items-center justify-between px-5 py-3">
          <Pressable>
            <Text className="text-[15px] font-mont text-ghost">Cancel</Text>
          </Pressable>
          <Text className="font-mont text-[17px] text-ghost text-center">
            Create trip
          </Text>
          <Pressable
            onPress={() => setActiveTab(FormStep.TripFindLocation)}
            className="flex flex-row items-center h-8"
          >
            <Text className="text-[15px] font-mont text-ghost">Next</Text>
            <Icon
              size={IconSize.Small}
              name="ChevronRightIcon"
              colour="#F9F8FF"
            />
          </Pressable>
        </View>
      ) : activeTab === FormStep.TripFindLocation ? (
        <View className="flex flex-row items-center px-5 py-3">
          <View className="flex flex-row items-center justify-start w-1/5 text-left">
            <IconButton
              size={IconSize.Small}
              icon="ChevronLeftIcon"
              colour="#F9F8FF"
              bgClass="bg-none"
              onPress={() => setActiveTab(FormStep.TripDetails)}
            />
          </View>

          <Text className="w-3/5 font-mont text-[17px] text-ghost text-center">
            Find Location
          </Text>
        </View>
      ) : activeTab === FormStep.TripAddLocation ? (
        <View className="flex flex-row items-center justify-between px-5 py-3">
          <IconButton
            size={IconSize.Small}
            icon="ChevronLeftIcon"
            colour="#F9F8FF"
            bgClass="bg-none"
            onPress={() => setActiveTab(FormStep.TripFindLocation)}
          />

          <Text className="font-mont text-[17px] text-ghost w-auto">
            Add Location
          </Text>
          <Pressable>
            <Text className="text-ghost font-mont text-[15px]">Save</Text>
          </Pressable>
        </View>
      ) : activeTab === FormStep.TripUploadImages ? (
        <View className="flex flex-row items-center justify-between px-5 py-3">
          <IconButton
            size={IconSize.Small}
            icon="XMarkIcon"
            colour="#F9F8FF"
            bgClass="bg-none"
            onPress={() => setActiveTab(FormStep.TripAddLocation)}
          />
          <View className="flex items-center justify-center w-3/5 h-8">
            <Toggle
              onChange={(value, option) => {
                setToggleValue(value)
                console.log(value, option)
              }}
              value={toggleValue}
              options={['Photos', 'Albums']}
            />
          </View>
          <View>
            <Pressable>
              <Text className="text-ghost font-mont text-[15px]">Add</Text>
            </Pressable>
          </View>
        </View>
      ) : (
        <View className="flex flex-row items-center justify-between px-5 py-3">
          <View className="flex items-center justify-start w-1/5"></View>

          <Text className="w-3/5 font-mont text-[17px] text-ghost text-center">
            Find Location
          </Text>

          <View className="flex flex-row items-center justify-start w-1/5 h-8">
            <Pressable>
              <Text className="text-ghost font-mont text-[15px]">Done</Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  )
}

export default FormHeader
