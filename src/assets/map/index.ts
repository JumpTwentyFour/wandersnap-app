import { ImageURISource } from 'react-native'
import lg from '@/assets/map/marker-lg.png'
import sm from '@/assets/map/marker-sm.png'
import { MarkerSize } from '@/types/map'

const markers: {
  [key in MarkerSize]: ImageURISource
} = {
  lg,
  sm,
}

export default markers
