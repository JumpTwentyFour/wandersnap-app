import React from 'react'
import {
  ImageBackground,
  ImageSourcePropType,
  View,
  Text,
  Pressable,
} from 'react-native'

interface MapLocationListingProps {
  locations: Array<{
    imageUrl: ImageSourcePropType
    name: string
  }>
}

function MapLocationListing(props: MapLocationListingProps) {
  const { locations } = props
  return (
    <View className="flex flex-col items-center gap-2">
      {locations.map((location) => (
        <Pressable
          key={location.name}
          onPress={() => console.log('location pressed')}
          className="flex flex-row items-center w-full px-5 py-2 bg-helio/10 rounded-xl"
        >
          <ImageBackground
            source={location.imageUrl}
            className="w-12 h-12 overflow-hidden rounded-full"
            resizeMode="cover"
          />
          <Text className="ml-5 text-base text-white font-mont">
            {location.name}
          </Text>
        </Pressable>
      ))}
    </View>
  )
}

export default MapLocationListing
