import React from 'react'
import { View } from 'react-native'
import { SetupProps } from '@/types/props'
import { ImageBackground } from 'expo-image'
import TripHeader from '@/components/headers/TripHeader'

type Props = SetupProps<'Image'>

function ImageScreen(props: Props) {
  const { route } = props

  const { image } = route.params
  return (
    <View className="w-full h-screen">
      <ImageBackground
        source={image}
        className="flex w-full h-full pt-12 overflow-hidden bg-white shadow rounded-xl"
        contentFit="cover"
      >
        <TripHeader />
      </ImageBackground>
    </View>
  )
}

ImageScreen.title = 'Image'

export default ImageScreen
