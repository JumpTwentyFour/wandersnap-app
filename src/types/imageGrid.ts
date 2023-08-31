import { ImageSourcePropType } from 'react-native'

export interface ImageGridImage {
  title: string
  id: number
  url: ImageSourcePropType
}

export interface ImageGridProps {
  images: Array<ImageGridImage>
}

export interface ImageGridItemProps {
  image: ImageGridImage
  setSelectedImages: React.Dispatch<React.SetStateAction<number[]>>
}
