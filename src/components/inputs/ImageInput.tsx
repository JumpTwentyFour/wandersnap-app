import React from 'react'
import { Pressable, Text } from 'react-native'
import {
  ImagePickerAsset,
  MediaTypeOptions,
  launchImageLibraryAsync,
} from 'expo-image-picker'
import cn from 'classnames'
import Icon from '@/components/Icon'
import { useColours } from '@/hooks/useTailwind'
import { ImageInputSize } from '@/types/imageInput'
import { IconSize } from '@/types/icon'

interface Props {
  size: ImageInputSize
  label?: string
  onChange: (images: ImagePickerAsset[]) => void
}

function ImageInput(props: Props) {
  const { size, label = 'Choose snaps from your library', onChange } = props

  const colors = useColours()

  const isSmall = size === ImageInputSize.Small
  const isMedium = size === ImageInputSize.Medium
  const isLarge = size === ImageInputSize.Large

  const sizeStyles = cn({
    'h-16': isSmall,
    'h-40': isMedium,
    'h-96': isLarge,
  })

  async function pickImage() {
    const result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.All,
      allowsMultipleSelection: true,
    })

    if (!result.canceled) {
      onChange(result.assets)
    }
  }

  return (
    <Pressable
      onPress={pickImage}
      className={cn(
        'flex items-center justify-center rounded-2xl w-full border border-ghost border-dashed',
        isSmall && 'flex-row',
        sizeStyles,
      )}
    >
      <Icon
        name="PhotoIcon"
        size={IconSize.Medium}
        colour={colors['tropical-indigo']}
      />
      <Text className={cn('text-ghost', isSmall && 'ml-2', !isSmall && 'mt-2')}>
        {label}
      </Text>
    </Pressable>
  )
}

export default ImageInput
