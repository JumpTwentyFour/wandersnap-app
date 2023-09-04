import { ImageURISource, ImageSourcePropType } from 'react-native'
import lg from './marker-lg.png'
import sm from './marker-sm.png'
import { MarkerSize } from '@/types/map'

const markers: {
  [key in MarkerSize]: ImageURISource | ImageSourcePropType
} = {
  lg,
  sm,
}

export default markers
