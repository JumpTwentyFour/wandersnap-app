import React from 'react'
import { GestureResponderEvent, Pressable, Text } from 'react-native'

interface FormHeaderButtonProps {
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined
  label?: string
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  disabled?: boolean
}

function FormHeaderButton(props: FormHeaderButtonProps) {
  return (
    <Pressable
      disabled={props.disabled}
      onPress={props.onPress}
      className="flex flex-row justify-center"
    >
      {props.iconLeft && <>{props.iconLeft}</>}
      <Text className="text-[15px] font-mont text-ghost">{props.label}</Text>
      {props.iconRight && <>{props.iconRight}</>}
    </Pressable>
  )
}

export default FormHeaderButton
