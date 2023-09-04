import React from 'react'
import { ImageSourcePropType } from 'react-native'

export interface ImageGridImage {
  title: string
  id: number
  url: ImageSourcePropType
}

export interface ImageGridProps {
  images: ImageGridImage[]
  selectedItems: number[]
  onSelectedImagesChange: React.Dispatch<React.SetStateAction<number[]>>
}

export interface ImageGridItemProps {
  image: ImageGridImage
  isSelected: boolean
  handleSelectedImages: (imageId: number) => void
  selectedImages: number[]
}
