import React, { useState } from 'react'
import { ImageBackground, ImageSourcePropType, Pressable } from 'react-native'
import Animated, {
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated'
import Icon from '../Icon'
import { IconSize } from '@/types/icon'
import { useColours } from '@/hooks/useTailwind'

interface ImageGridItemProps {
  image: {
    title: string
    id: number | string
    url: ImageSourcePropType
  }
}

const DURATION = 200
const DELAY = 50

function ImageGridItem(props: ImageGridItemProps) {
  const image = props.image

  const colours = useColours()

  const [selected, setSelected] = useState(false)

  const opacity = useSharedValue(0)

  function handleSetSelected() {
    if (selected) {
      opacity.value = withDelay(DELAY, withTiming(0, { duration: DURATION }))
    } else {
      opacity.value = withDelay(DELAY, withTiming(1, { duration: DURATION }))
    }

    setSelected(!selected)
  }

  return (
    <Pressable
      key={image.id}
      onPress={() => handleSetSelected()}
      className="flex items-center justify-center w-1/3 p-1 h-[111px] overflow-hidden shadow rounded-xl"
    >
      <ImageBackground
        source={image.url}
        className="flex flex-row items-end justify-end w-full h-full overflow-hidden bg-white shadow rounded-xl"
        resizeMode="cover"
      >
        <Animated.View
          style={{ opacity: opacity }}
          className="flex flex-row items-center justify-center w-6 h-6 mb-2 mr-2 border border-white rounded-full bg-helio"
        >
          <Icon
            name="CheckmarkIcon"
            size={IconSize.XSmall}
            colour={colours.ghost}
          />
        </Animated.View>
      </ImageBackground>
    </Pressable>
  )
}

export default ImageGridItem
