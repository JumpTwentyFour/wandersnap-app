import { GestureResponderEvent } from 'react-native'
import { IconSize } from '@/types/icon'

export interface IconButtonProps {
  size: IconSize,
  colour: string
  bgClass: string
  icon: string
  disabled?: boolean
  onPress?: (event: GestureResponderEvent) => void
}