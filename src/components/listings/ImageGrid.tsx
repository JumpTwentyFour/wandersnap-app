import { ImageGridProps } from '@/types/imageGrid'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import ImageGridItem from '@/components/listings/ImageGridItem'

function ImageGrid(props: ImageGridProps) {
  const { images } = props

  const [selectedImages, setSelectedImages] = useState<Array<number>>([])

  useEffect(() => {
    console.log(selectedImages)
  }, [selectedImages])

  return (
    <View className="flex flex-row flex-wrap items-start justify-start">
      {images.map((image) => (
        <ImageGridItem
          key={image.id}
          image={image}
          setSelectedImages={setSelectedImages}
        />
      ))}
    </View>
  )
}

export default ImageGrid
