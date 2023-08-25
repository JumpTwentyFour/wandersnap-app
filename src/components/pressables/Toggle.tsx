import React, { useEffect, useRef } from 'react'
import { View, Text, Pressable, LayoutChangeEvent } from 'react-native'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'

interface Props {
  onChange: (value: boolean, option: string) => void
  value?: boolean
  options: [string, string]
}

const BASE_X = 6

function Toggle(props: Props) {
  const { onChange, value = false, options } = props
  
  const movementValue = useRef<number>(0)
  const x = useSharedValue(BASE_X)

  function handleLayout(event: LayoutChangeEvent) {
    if (movementValue.current) return

    movementValue.current = event.nativeEvent.layout.width
  }

  function handleChange() {
    if (value === undefined) return

    onChange(!value, options[+!value])
  }

  useEffect(() => {
    x.value = withSpring(value ? movementValue.current : BASE_X, {
      damping: 20,
      stiffness: 90,
      velocity: 1.5,
    })
  }, [value])

  return (
    <Pressable
      className="h-9 bg-tropical-indigo/25 rounded-lg flex flex-row space-around p-1"
      onPress={handleChange}
    >
      {options.map((option) => (
        <View
          key={option}
          className='flex items-center justify-center rounded-lg h-full w-1/2 z-10'
        >
          <Text className="text-ghost font-mont">{option}</Text>
        </View>
      ))}
      <Animated.View
        onLayout={handleLayout}
        className='w-1/2 h-full bg-helio left-1 top-1 absolute rounded shadow'
        style={{ left: x }}
      />
    </Pressable>
  )
}

export default Toggle
