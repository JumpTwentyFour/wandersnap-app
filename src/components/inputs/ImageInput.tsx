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
import { Image } from 'expo-image'

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

  const [selectedImage, setSelectedImage] = React.useState<ImagePickerAsset>()

  async function pickImage() {
    try {
      const result = await launchImageLibraryAsync({
        mediaTypes: MediaTypeOptions.All,
        allowsMultipleSelection: true,
      })
      console.log('imagepicker result', result)
      if (!result.canceled) {
        if (isLarge) {
          setSelectedImage(result.assets[0])
        }
        onChange(result.assets)
      }
    } catch (e) {
      console.log('ERROR PICKING IMAGE', e)
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
      {isLarge && selectedImage ? (
        <Image
          className="rounded-2xl"
          source={{ uri: selectedImage.uri }}
          style={{ width: '100%', height: 382 }}
        />
      ) : (
        <>
          <Icon
            name="PhotoIcon"
            size={IconSize.Medium}
            colour={colors['tropical-indigo']}
          />
          <Text
            className={cn('text-ghost', isSmall && 'ml-2', !isSmall && 'mt-2')}
          >
            {label}
          </Text>
        </>
      )}
    </Pressable>
  )
}

export default ImageInput
