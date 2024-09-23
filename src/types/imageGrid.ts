import React from 'react'
import { ImageSourcePropType } from 'react-native'

export type ImageGridImage = ImageSourcePropType | string

export interface ImageGridProps {
  images: ImageGridImage[]
  selectedItems: Array<number | string>
  onSelectedImagesChange: React.Dispatch<
    React.SetStateAction<Array<number | string>>
  >
}

export interface ImageGridItemProps {
  image: ImageGridImage
  index: number
  isSelected: boolean
  handleSelectedImages: (imageId: number | string) => void
}
