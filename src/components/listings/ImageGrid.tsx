import React, { useState } from 'react'
import { View } from 'react-native'
import ImageGridItem from '@/components/listings/ImageGridItem'
import { ImageGridProps } from '@/types/imageGrid'

function ImageGrid(props: ImageGridProps) {
  const { images, onSelectedImagesChange } = props

  const [selectedImages, setSelectedImages] = useState<Array<number>>(
    props.selectedImages || [],
  )

  function handleSelectedImages(imageId: number) {
    const images = selectedImages
    if (images.includes(imageId)) {
      images.splice(images.indexOf(imageId), 1)
    } else {
      images.push(imageId)
    }

    setSelectedImages(images)
    onSelectedImagesChange(images)
  }

  return (
    <View className="flex flex-row flex-wrap items-start justify-start">
      {images.map((image) => (
        <ImageGridItem
          key={image.id}
          image={image}
          selectedImages={selectedImages}
          isSelected={selectedImages.includes(image.id)}
          handleSelectedImages={handleSelectedImages}
        />
      ))}
    </View>
  )
}

export default ImageGrid
