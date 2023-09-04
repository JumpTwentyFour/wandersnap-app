import React from 'react'
import { Pressable, View, Text } from 'react-native'
import cn from 'classnames'

interface Props {
  value: number
  onChange: (value: number) => void
  children: React.ReactNode
}

function Tabs(props: Props) {
  const { value, onChange, children } = props

  return (
    <View className="flex flex-row justify-center gap-5 p-2">
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return null

        return (
          <Pressable
            onPress={() => onChange(index)}
            className={cn(
              index === value && 'border-tropical-indigo border-b-2',
            )}
          >
            <Text className="font-mont-medium text-ghost">
              {child.props.title}
            </Text>
          </Pressable>
        )
      })}
    </View>
  )
}

function TabItem(props: { [key: string]: unknown }) {
  return <View {...props} />
}

Tabs.Item = TabItem
export default Tabs
