import { GestureResponderEvent } from 'react-native/Libraries/Types/CoreEventTypes'

export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
}

export enum ButtonType {
  Solid = 'solid',
  Outline = 'outline',
}

export interface ButtonProps {
  variant?: ButtonVariant
  type?: ButtonType
  label: string
  disabled?: boolean
  onPress?: (event: GestureResponderEvent) => void
}
