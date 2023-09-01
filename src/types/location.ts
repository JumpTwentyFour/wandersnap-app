import { ImageSourcePropType } from 'react-native'

export interface LocationListingProps {
  locations?: {
    name: string
    imageUrl: ImageSourcePropType
    imageCount: number
  }[]
}
