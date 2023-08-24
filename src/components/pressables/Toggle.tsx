import React, { useMemo } from 'react'
import { View, Text, Pressable } from 'react-native'
import cn from 'classnames'

interface Props {
  onChange: (value: boolean, option: string) => void
  value?: boolean
  options: [string, string]
}

function Toggle(props: Props) {
  const { onChange, value = false, options } = props

  const selected = useMemo(() => {
    if (value === undefined) return

    return options?.[+value]
  }, [value])

  function handleChange() {
    if (value === undefined) return

    onChange(!value, options[+!value])
  }

  return (
    <Pressable
      className='h-9 bg-tropical-indigo/25 rounded-lg flex flex-row space-around p-1'
      onPress={handleChange}
    >
      {options.map((option) => (
        <View
          key={option}
          className={cn(
            'flex items-center justify-center rounded-lg h-full w-1/2',
            selected === option && 'bg-helio',
          )}
        >
          <Text className='text-ghost font-mont'>{option}</Text>
        </View>
      ))}
    </Pressable>
  )
}

export default Toggle
