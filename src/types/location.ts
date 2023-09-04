import { ImageSourcePropType } from 'react-native'

export interface LocationListItem {
  name: string
  imageUrl: ImageSourcePropType
  imageCount: number
}

export interface MapLocationListingItem {
  imageUrl: ImageSourcePropType
  name: string
}
