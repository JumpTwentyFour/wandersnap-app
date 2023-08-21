import React from 'react'
import cn from 'classnames'
import { Text, Pressable, GestureResponderEvent } from 'react-native'

interface Props {
  variant?: 'primary' | 'secondary' | 'tertiary'
  type?: 'solid' | 'outline'
  label: string
  disabled?: boolean
  onPress?: (event: GestureResponderEvent) => void
}

function Button(props: Props) {
  const {
    variant,
    type,
    label = 'Button',
    disabled = false,
    onPress,
  } = props

  const buttonStyles = cn({
    'flex h-12 flex-col items-center justify-center rounded-full px-10 py-3 shadow': type === 'solid' && variant !== 'tertiary',
    'flex h-12 flex-col items-center justify-center rounded-full px-10 py-3 shadow border border-solid': type === 'outline' && variant !== 'tertiary',
    'flex h-12 flex-col items-center justify-center px-10 py-3 ': type === undefined || null && variant !== 'tertiary',
    'flex px-4 py-1 items-center rounded-full': variant ==='tertiary' && type === 'solid',
    'flex px-4 py-1 items-center rounded-full border border-solid': variant ==='tertiary' && type === 'outline',
    'bg-[#7E5BFF]': variant === 'primary' && !disabled && type === 'solid',
    'border-[#7E5BFF]': variant === 'primary' && !disabled && type === 'outline',
    'bg-[#F9F8FF33]': variant === 'primary' && disabled && type === 'solid',
    'bg-[#F9F8FF]': variant === 'secondary' && !disabled && type === 'solid',
    'border-[#F9F8FF]': variant === 'secondary' && type === 'outline',
    'bg-[#F9F8FF99]': variant === 'secondary' && disabled && type === 'solid',
    'bg-[#9F85FF40]': variant === 'tertiary' && type === 'solid',
    'border-[#9F85FF40]': variant === 'tertiary' && type === 'outline',
  })

  const labelStyles = cn({
    'text-13 text-white': (variant === 'primary' && !disabled && type === 'solid') || (variant === 'secondary' && type === 'outline' && !disabled) || (variant === 'tertiary' && type !== undefined || null),
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
