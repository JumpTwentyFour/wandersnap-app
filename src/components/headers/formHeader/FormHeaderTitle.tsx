import React from 'react'
import { Text } from 'react-native'
interface Props {
  title: string
}

function FormHeaderTitle(props: Props) {
  return (
    <Text className="font-mont text-[17px] text-ghost text-center">
      {props.title}
    </Text>
  )
}

export default FormHeaderTitle
