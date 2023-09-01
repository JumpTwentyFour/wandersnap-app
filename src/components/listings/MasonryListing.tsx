import React from 'react'
import { View, Dimensions, ImageSourcePropType } from 'react-native'

import MasonryListItem from '@/components/listings/MasonryListItem'

interface MasonryListingProps {
  images: ImageSourcePropType[]
}

function MasonryListing(props: MasonryListingProps) {
  const { width } = Dimensions.get('window')
  const { images } = props

  console.log(width)
  return (
    <View className="flex flex-row w-full">
      <View className="flex flex-col w-1/2 pr-1">
        {images.map((image, ix) => {
          if (ix % 2 === 0) {
            return (
              <MasonryListItem
                key={ix}
                image={image}
                containerWidth={width * 0.5}
              />
            )
          }
        })}
      </View>
      <View className="flex flex-col w-1/2 pl-1 ">
        {images.map((image, ix) => {
          if (ix % 2 !== 0) {
            return (
              <MasonryListItem
                key={ix}
                image={image}
                containerWidth={width * 0.5}
              />
            )
          }
        })}
      </View>
    </View>
  )
}

export default MasonryListing
