import { ImageSourcePropType } from 'react-native'

export interface ImageGridImage {
  title: string
  id: number
  url: ImageSourcePropType
}

export interface ImageGridProps {
  images: Array<ImageGridImage>
  selectedImages: number[]
  onSelectedImagesChange: React.Dispatch<React.SetStateAction<number[]>>
}

export interface ImageGridItemProps {
  image: ImageGridImage
  isSelected: boolean
  handleSelectedImages(images: Array<number>): void
  selectedImages: number[]
}
