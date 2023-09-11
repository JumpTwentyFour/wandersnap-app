import React from 'react'
import { View } from 'react-native'

interface Props {
  onChange: (value: number) => void
  children: React.ReactNode
}

function Carousel(props: Props) {
  const { children } = props

  return (
    <View className="flex flex-col items-center w-full h-full max-h-full p-5 justify-evenly bg-tuatura">
      <>{children}</>
    </View>
  )
}

export default Carousel
