import React from 'react'
import { View } from 'react-native'
import { FormHeaderProps } from '@/types/formHeader'

function FormHeader(props: FormHeaderProps) {
  return (
    <View>
      <View className="flex flex-row items-center justify-between px-5 py-3">
        <View className="flex flex-row justify-start w-1/5">
          {props.leftComponent}
        </View>
        <View className="flex items-center justify-center w-3/5 h-8">
          {props.centerComponent}
        </View>
        <View className="flex flex-row items-center justify-end w-1/5">
          {props.rightComponent}
        </View>
      </View>
    </View>
  )
}

export default FormHeader
