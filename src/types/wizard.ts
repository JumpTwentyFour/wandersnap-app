import { ImageSourcePropType } from 'react-native'
import Carousel, { AdditionalParallaxProps } from 'react-native-snap-carousel'

export interface WizardProps {
  data: Array<WizardItemType>
  height: number
  width: number
  activeDotIndex: number
  setActiveDotIndex: React.Dispatch<React.SetStateAction<number>>
}

export type WizardItemType = {
  title: string
  body: string
  actionText: string
  imageUrl: ImageSourcePropType
  action?: () => void
}

export interface WizardItemProps {
  item: WizardItemType
  height: number
  itemsLength: number
  index: number
  activeDotIndex: number
  parallaxProps?: AdditionalParallaxProps
  carouselRef: React.RefObject<Carousel<unknown>>
}
