import React from 'react'
import { View, Text, Pressable } from 'react-native'

interface CarouselTextProps {
  value: number
  children: React.ReactNode
}

interface CarouselTextTabProps {
  title: string
  body: string
  actionText: string
  onPress: () => void
}

function CarouselText(props: CarouselTextProps) {
  const { value, children } = props

  return <>{React.Children.toArray(children)[value]}</>
}

function CarouselTabText(props: CarouselTextTabProps) {
  return (
    <View
      {...props}
      className="flex flex-col min-h-[140px] items-center justify-between"
    >
      <View>
        <Text className="text-2xl text-center font-comfortaa text-ghost ">
          {props.title}
        </Text>
        <Text className="mt-3 text-base text-center font-mont text-ghost">
          {props.body}
        </Text>
      </View>
      <Pressable>
        <Text className="font-mont-medium text-ghost">{props.actionText}</Text>
      </Pressable>
    </View>
  )
}

CarouselText.Tab = CarouselTabText
export default CarouselText
