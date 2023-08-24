import React from 'react'
import { View, Text } from 'react-native'
import cn from 'classnames'
import { ImageInputSize } from '@/types/imageInput'
import Icon from '@/components/Icon'
import { useColours } from '@/hooks/useTailwind'
import { IconSize } from '@/types/icon'

interface Props {
  size: ImageInputSize
  label?: string
}

function ImageInput(props: Props) {
  const { size, label = 'Choose snaps from your library' } = props
  const colors = useColours()

  const isSmall = size === ImageInputSize.Small
  const isMedium = size === ImageInputSize.Medium
  const isLarge = size === ImageInputSize.Large

  const sizeStyles = cn({
    'h-16': isSmall,
    'h-40': isMedium,
    'h-96': isLarge,
  })

  return (
    <View
      className={cn(
        'flex items-center justify-center rounded-2xl w-full border border-ghost border-dashed',
        isSmall && 'flex-row',
        sizeStyles,
      )}
    >
      <Icon name='PhotoIcon' size={IconSize.Medium} colour={colors['tropical-indigo']} />
      <Text
        className={cn(
          'text-ghost',
          isSmall && 'ml-2',
          !isSmall && 'mt-2',
        )}
      >
        {label}
      </Text>
    </View>
  )
}

export default ImageInput
