import React from 'react'
import { ImageSourcePropType, View } from 'react-native'
import ImageGridItem from './ImageGridItem'

interface ImageGridProps {
  images: Array<{
    title: string
    id: number | string
    url: ImageSourcePropType
  }>
}

function ImageGrid(props: ImageGridProps) {
  const { images } = props

  return (
    <View className="flex flex-row flex-wrap items-start justify-start">
      {images.map((image) => (
        <ImageGridItem key={image.id} image={image} />
      ))}
    </View>
  )
}

export default ImageGrid
