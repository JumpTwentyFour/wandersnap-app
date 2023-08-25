import React from 'react'
import { View } from 'react-native'
import { TextInput } from 'react-native'
import Icon from '@/components/Icon'
import { IconSize } from '@/types/icon'
import { useColours } from '@/hooks/useTailwind'

interface Props {
  value?: string
  onChange: (value: string) => void
}

function SearchInput(props: Props) {
  const { value, onChange } = props
  const colours = useColours()

  return (
    <View className="relative">
      <View className="absolute top-2 left-2">
        <Icon name="SearchIcon" size={IconSize.Small} colour={colours.ghost} />
      </View>
      <TextInput
        className="w-full h-9 bg-ghost/10 rounded-xl pl-9 pr-2 text-ghost"
        value={value}
        onChangeText={onChange}
      />
    </View>
  )
}

export default SearchInput
