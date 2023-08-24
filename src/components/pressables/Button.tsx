import React from 'react'
import cn from 'classnames'
import { Text, Pressable } from 'react-native'
import { ButtonProps } from '@/types/button'

function Button(props: ButtonProps) {
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
  const isOutline = type === 'outline'
  const hasNoType = type === undefined || null

  const buttonStyles = cn({
    'flex h-12 flex-col items-center justify-center rounded-full px-10 py-3 shadow': isSolid && !isTertiary,
    'flex h-12 flex-col items-center justify-center rounded-full px-10 py-3 shadow border border-solid': isOutline && !isTertiary,
    'flex h-12 flex-col items-center justify-center px-10 py-3': hasNoType && !isTertiary,
    'flex px-4 py-1 items-center rounded-full': isTertiary && isSolid,
    'flex px-4 py-1 items-center rounded-full border border-solid': isTertiary && isOutline,
    'bg-helio': isPrimary && isSolid && !disabled,
    'border-helio': isPrimary && isOutline && !disabled,
    'bg-ghost/20': isPrimary && isSolid && disabled,
    'bg-ghost': isSecondary && isSolid && !disabled,
    'border-ghost':isSecondary && isOutline,
    'bg-ghost/60': isSecondary && isSolid && disabled,
    'bg-tropical-indigo/40': isTertiary && isSolid,
    'border-tropical-indigo/40': isTertiary && isOutline,
  })

  const labelStyles = cn({
    'text-12 text-ghost font-mont': (isPrimary && isSolid && !disabled) || (isSecondary && isOutline && !disabled) || (isTertiary && !hasNoType),
    'text-12 text-ghost/60 font-mont': isPrimary && disabled,
    'text-12 text-helio font-mont': (isSecondary && isSolid) || (isPrimary && isOutline),
    'text-15 text-ghost font-mont': (isSecondary && hasNoType),
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
