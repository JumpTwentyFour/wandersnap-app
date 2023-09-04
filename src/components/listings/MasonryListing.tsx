import React, { useMemo, useState } from 'react'
import { View, Dimensions, ImageSourcePropType } from 'react-native'
import MasonryListItem from '@/components/listings/MasonryListItem'

interface MasonryListingProps {
  images: ImageSourcePropType[]
}

function MasonryListing(props: MasonryListingProps) {
  const { images } = props

  const [gridWidth, setGridWidth] = useState<number>(
    Dimensions.get('window').width,
  )

  const [leftImages, rightImages] = useMemo(() => {
    return [
      images.filter((_, i) => i % 2 === 0),
      images.filter((_, i) => i % 2 === 1),
    ]
  }, [images])

  return (
    <View
      className="flex flex-row w-full"
      onLayout={({ nativeEvent }) => setGridWidth(nativeEvent.layout.width)}
    >
      <View className="flex flex-col w-1/2 pr-1">
        {leftImages.map((image, ix) => (
          <MasonryListItem
            key={ix}
            image={image}
            containerWidth={gridWidth * 0.5}
          />
        ))}
      </View>
      <View className="flex flex-col w-1/2 pl-1 ">
        {rightImages.map((image, ix) => (
          <MasonryListItem
            key={ix}
            image={image}
            containerWidth={gridWidth * 0.5}
          />
        ))}
      </View>
    </View>
  )
}

export default MasonryListing
