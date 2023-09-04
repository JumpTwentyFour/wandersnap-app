import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import ImageGridItem from '@/components/listings/ImageGridItem'
import { ImageGridProps } from '@/types/imageGrid'

function ImageGrid(props: ImageGridProps) {
  const { images } = props

  const [selectedImages, setSelectedImages] = useState<Array<number>>(
    props.selectedImages || [],
  )

  useEffect(() => {
    console.log(selectedImages)
  }, [selectedImages])

  return (
    <View className="flex flex-row flex-wrap items-start justify-start">
      {images.map((image) => (
        <ImageGridItem
          key={image.id}
          image={image}
          selectedImages={selectedImages}
          setSelectedImages={setSelectedImages}
        />
      ))}
    </View>
  )
}

export default ImageGrid
