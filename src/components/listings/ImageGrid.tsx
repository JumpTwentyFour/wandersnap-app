import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import ImageGridItem from '@/components/listings/ImageGridItem'
import { ImageGridProps } from '@/types/imageGrid'

function ImageGrid(props: ImageGridProps) {
  const { images, onSelectedImagesChange, selectedItems } = props

  const [selectedImages, setSelectedImages] = useState<Array<number | string>>(
    selectedItems || [],
  )

  function handleSelectedImages(imageId: number | string) {
    setSelectedImages((prevImages) => {
      if (prevImages.includes(imageId)) {
        return prevImages.filter((id) => id !== imageId)
      }

      return [...prevImages, imageId]
    })
  }

  useEffect(() => {
    onSelectedImagesChange(selectedImages)
  }, [selectedImages])

  return (
    <View className="flex flex-row flex-wrap items-start justify-start">
      {images.map((image, ix) => (
        <ImageGridItem
          key={ix}
          index={ix}
          image={image}
          isSelected={selectedImages.includes(ix)}
          handleSelectedImages={handleSelectedImages}
        />
      ))}
    </View>
  )
}

export default ImageGrid
