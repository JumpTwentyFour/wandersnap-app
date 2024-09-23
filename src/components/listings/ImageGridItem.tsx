import React from 'react'
import { Pressable } from 'react-native'
import Animated, {
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated'
import Icon from '@/components/Icon'
import { useColours } from '@/hooks/useTailwind'
import { IconSize } from '@/types/icon'
import { ImageGridItemProps } from '@/types/imageGrid'
import { Image } from 'expo-image'

const DURATION = 200
const DELAY = 50

function ImageGridItem(props: ImageGridItemProps) {
  const { image, index, handleSelectedImages, isSelected } = props

  const colours = useColours()

  const opacity = useSharedValue(0)

  function handleSelected(imageId: number | string) {
    handleSelectedImages(imageId)

    if (isSelected) {
      opacity.value = withDelay(DELAY, withTiming(0, { duration: DURATION }))
    } else {
      opacity.value = withDelay(DELAY, withTiming(1, { duration: DURATION }))
    }
  }

  return (
    <Pressable
      key={index}
      onPress={() => handleSelected(index)}
      className="flex items-center justify-center w-1/3 p-1 h-[111px] overflow-hidden shadow relative rounded-xl"
    >
      <Image
        source={image}
        className="flex w-full h-full rounded-xl"
        contentFit="cover"
      />
      {isSelected && (
        <Animated.View
          style={{ opacity: opacity }}
          className="absolute flex flex-row items-center justify-center w-6 h-6 mb-2 mr-2 border border-white rounded-full top-2 right-1 bg-helio"
        >
          <Icon
            name="CheckmarkIcon"
            size={IconSize.XSmall}
            colour={colours.ghost}
          />
        </Animated.View>
      )}
    </Pressable>
  )
}

export default ImageGridItem
