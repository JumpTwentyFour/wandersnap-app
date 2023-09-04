import { ImageURISource } from 'react-native'
import lg from './marker-lg.png'
import sm from './marker-sm.png'
import { MarkerSize } from '@/types/map'
import { ImageSourcePropType } from 'react-native'

const markers: {
  [key in MarkerSize]: ImageURISource | ImageSourcePropType
} = {
  lg,
  sm,
}

export default markers
