import classNames from 'classnames'
import React from 'react'
import { Text, Pressable, GestureResponderEvent } from 'react-native'

interface Props {
  variant?: 'primary' | 'secondary' | 'tertiary'
  type?: 'solid' | 'outline'
  label: string
  disabled?: boolean
  onPress?:((event: GestureResponderEvent) => void) | null | undefined
}

function Button(props: Props) {
  const {
    variant = 'primary',
    type,
    label = 'Button',
    disabled = false,
    onPress,
  } = props

  const buttonStyles = classNames({
    'flex h-12 flex-col items-center justify-center rounded-full px-10 py-3 shadow': type === 'solid',
    'flex h-12 flex-col items-center justify-center rounded-full px-10 py-3 shadow border border-solid': type === 'outline',
    'flex h-12 flex-col items-center justify-center px-10 py-3': type === undefined || null,
    'bg-[#7E5BFF]': variant === 'primary' && !disabled && type === 'solid',
    'border-[#7E5BFF]': variant === 'primary' && !disabled && type === 'outline',
    'bg-[#F9F8FF33]': variant === 'primary' && disabled && type === 'solid',
    'bg-[#F9F8FF]': variant === 'secondary' && !disabled && type === 'solid',
    'border-[#F9F8FF]': variant === 'secondary' && type === 'outline',
    'bg-[#F9F8FF99]': variant === 'secondary' && disabled && type === 'solid',
  })

  const labelStyles = classNames({
    'text-12 text-white': (variant === 'primary' && !disabled && type === 'solid') || (variant === 'secondary' && type === 'outline' && !disabled),
    'text-12 text-[#F9F8FF99]': variant === 'primary' && disabled,
    'text-12 text-[#7E5BFF]': (variant === 'secondary' && type === 'solid') || (variant === 'primary' && type === 'outline'),
    'text-15 text-[#F9F8FF]': (variant === 'secondary' && type === undefined || null),
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