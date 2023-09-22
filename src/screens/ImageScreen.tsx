import React from 'react'
import { View, Dimensions, Text } from 'react-native'
import { Image } from 'expo-image'
import { BlurView } from 'expo-blur'

import TripHeader from '@/components/headers/TripHeader'

import { SetupProps } from '@/types/props'
import Icon from '@/components/Icon'
import { IconSize } from '@/types/icon'

type Props = SetupProps<'Image'>

function ImageScreen(props: Props) {
  const { route } = props

  const height = Dimensions.get('window').height

  const { image, location } = route.params

  return (
    <View style={{ flex: 1, height: height }} className="relative w-full">
      <Image
        source={image}
        style={{ height: height }}
        className="w-full"
        contentFit="cover"
      ></Image>
      <View className="absolute top-0 w-full pt-16">
        <TripHeader />
      </View>
      <BlurView
        tint="dark"
        intensity={10}
        style={{ top: height * 0.9 }}
        className="absolute bottom-0 flex flex-row items-center w-full pl-4 space-x-2"
      >
        <Icon name="PinIcon" size={IconSize.Small} colour="#ffffff" />
        <Text className="text-lg text-white font-mont-medium">
          {location || 'Angkor Wat'}
        </Text>
      </BlurView>
    </View>
  )
}

ImageScreen.title = 'Image'

export default ImageScreen
