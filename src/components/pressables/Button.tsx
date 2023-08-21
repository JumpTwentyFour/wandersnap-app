import React from 'react'
import cn from 'classnames'
import { Text, Pressable, GestureResponderEvent } from 'react-native'

interface Props {
  variant?: 'primary' | 'secondary' | 'tertiary'
  type: 'solid' | 'outline'
  label: string
  disabled?: boolean
  onPress?: (event: GestureResponderEvent) => void
}

function Button(props: Props) {
  const {
    variant = 'primary',
    type = 'solid',
    label = 'Button',
    disabled = false,
    onPress,
  } = props

  const buttonStyles = cn({
    'flex h-12 flex-col items-center justify-center rounded-full px-10 py-3 shadow': type === 'solid',
    'flex h-12 flex-col items-center justify-center rounded-full px-10 py-3 shadow border border-solid': type === 'outline',
    'bg-[#7E5BFF]': variant === 'primary' && !disabled && type === 'solid',
    'border-[#7E5BFF]': variant === 'primary' && !disabled && type === 'outline',
    'bg-[#F9F8FF33]': variant === 'primary' && disabled && type === 'solid',
    'bg-[#F9F8FF]': variant === 'secondary' && !disabled && type === 'solid',
    'border-[#F9F8FF]': variant === 'secondary' && type === 'outline',
    'bg-[#F9F8FF99]': variant === 'secondary' && disabled && type === 'solid',
  })

  const labelStyles = cn({
    'text-12 text-white': (variant === 'primary' && !disabled && type === 'solid') || (variant === 'secondary' && type === 'outline' && !disabled),
    'text-12 text-[#F9F8FF99]': variant === 'primary' && disabled,
    'text-12 text-[#7E5BFF]': (variant === 'secondary' && type === 'solid') || (variant === 'primary' && type === 'outline'),
  })

  return  (
    <Pressable
      className={buttonStyles}
      disabled={disabled}
      onPress={(event) => onPress && onPress(event)}
    >
      <Text className={labelStyles}>{label}</Text>
    </Pressable>
  )
}

export default Button
