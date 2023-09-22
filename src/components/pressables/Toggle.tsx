import { IconSize } from '@/types/icon'
import React, { useEffect, useRef } from 'react'
import { View, Text, Pressable, LayoutChangeEvent } from 'react-native'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'
import Icon from '@/components/Icon'
import { useColours } from '@/hooks/useTailwind'

interface Props {
  onChange: (value: boolean, option: string) => void
  value?: boolean
  options: [string, string]
  iconOptions?: [string, string]
}

const BASE_X = 6

function Toggle(props: Props) {
  const { onChange, value = false, options, iconOptions } = props

  const colours = useColours()

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
      className="flex flex-row p-1 rounded-lg h-9 bg-tropical-indigo/25 space-around"
      onPress={handleChange}
    >
      {options.map((option, ix) => (
        <View
          key={option}
          className="z-10 flex flex-row items-center justify-center w-1/2 h-full space-x-1 rounded-lg"
        >
          {iconOptions && (
            <Icon
              name={iconOptions[ix]}
              size={IconSize.Small}
              colour={colours.ghost}
            />
          )}
          <Text className="text-ghost font-mont">{option}</Text>
        </View>
      ))}
      <Animated.View
        onLayout={handleLayout}
        className="absolute w-1/2 h-full rounded shadow bg-helio left-1 top-1"
        style={{ left: x }}
      />
    </Pressable>
  )
}

export default Toggle
