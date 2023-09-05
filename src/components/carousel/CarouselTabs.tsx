import React from 'react'
import { Pressable, View } from 'react-native'
import cn from 'classnames'

interface Props {
  value: number
  onChange: (value: number) => void
  children: React.ReactNode
}

function CarouselTabs(props: Props) {
  const { value, onChange, children } = props

  return (
    <View className="flex flex-row justify-center gap-5 px-2 py-5">
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return null

        return (
          <Pressable
            onPress={() => onChange(index)}
            className={cn(
              index === value && 'bg-tropical-indigo w-5 h-2 rounded-full',
              index !== value && 'bg-tickle w-2 h-2 rounded-full',
            )}
          ></Pressable>
        )
      })}
    </View>
  )
}

function CarouselTabItem(props: { [key: string]: unknown }) {
  return <View {...props} />
}

CarouselTabs.Item = CarouselTabItem
export default CarouselTabs
