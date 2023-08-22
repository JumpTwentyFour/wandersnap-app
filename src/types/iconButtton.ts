import { GestureResponderEvent } from 'react-native'

export interface IconButtonProps {
    size: 'sm' | 'md' | 'lg',
    colour: string
    bgClass: string
    icon: string
    disabled?: boolean
    onPress?: (event: GestureResponderEvent) => void
  }