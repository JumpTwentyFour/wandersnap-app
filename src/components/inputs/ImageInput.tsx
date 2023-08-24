import React from 'react'
import { View, Text } from 'react-native'
import cn from 'classnames'
import { ImageInputSize } from '@/types/imageInput'
import Icon from '../Icon'
import { IconSize } from '@/types/icon'

interface Props {
  size: ImageInputSize
  label?: string
}

function ImageInput(props: Props) {
  const { size, label = 'Choose snaps from your library' } = props

  const sizeStyles = cn({
    'h-16': size === ImageInputSize.Small,
    'h-11': size === ImageInputSize.Medium,
    'h-14': size === ImageInputSize.Large,
  })

  return (
    <View
      className={cn(
        'flex flex-row items-center justify-center rounded-2xl w-full border border-white border-dashed',
        sizeStyles,
      )}
    >
      <Icon name='PhotoIcon' size={IconSize.Medium} colour='#fff' />
      <Text className='ml-2 text-white'>{label}</Text>
    </View>
  )
}

export default ImageInput
