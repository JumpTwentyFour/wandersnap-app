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

  const isPrimary = variant === 'primary'
  const isSecondary = variant === 'secondary'
  const isTertiary = variant === 'tertiary'
  const isSolid = type === 'solid'
  const isOutline = type === 'solid'
  const hasNoType = type === undefined || null

  const buttonStyles = cn({
    'flex h-12 flex-col items-center justify-center rounded-full px-10 py-3 shadow': isSolid && !isTertiary,
    'flex h-12 flex-col items-center justify-center rounded-full px-10 py-3 shadow border border-solid': isOutline && !isTertiary,
    'flex h-12 flex-col items-center justify-center px-10 py-3': hasNoType && !isTertiary,
    'flex px-4 py-1 items-center rounded-full': isTertiary && isSolid,
    'flex px-4 py-1 items-center rounded-full border border-solid': isTertiary && isOutline,
    'bg-[#7E5BFF]': isPrimary && isSolid && !disabled,
    'border-[#7E5BFF]': isPrimary && isOutline && !disabled,
    'bg-[#F9F8FF33]': isPrimary && isSolid && disabled,
    'bg-[#F9F8FF]': isSecondary && isSolid && !disabled,
    'border-[#F9F8FF]':isSecondary && isOutline,
    'bg-[#F9F8FF99]': isSecondary && isSolid && disabled,
    'bg-[#9F85FF40]': isTertiary && isSolid,
    'border-[#9F85FF40]': isTertiary && isOutline,
  })

  const labelStyles = cn({
    'text-12 text-white': (isPrimary && isSolid && !disabled) || (isSecondary && isOutline && !disabled) || (isTertiary && !hasNoType),
    'text-12 text-[#F9F8FF99]': isPrimary && disabled,
    'text-12 text-[#7E5BFF]': (isSecondary && isSolid) || (isPrimary && isOutline),
    'text-15 text-[#F9F8FF]': (isSecondary && hasNoType),
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