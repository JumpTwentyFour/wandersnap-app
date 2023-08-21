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

  const isPrimarySolid = variant === 'primary' && type === 'solid'
  const isPrimaryOutline = variant === 'primary' && type === 'outline'
  const isSecondarySolid = variant === 'secondary' && type === 'solid'
  const isSecondaryOutline = variant === 'secondary' && type === 'outline'
  const isTertiarySolid = variant === 'tertiary' && type === 'solid'
  const isTertiaryOutline = variant === 'tertiary' && type === 'outline'

  const buttonStyles = cn({
    'flex h-12 flex-col items-center justify-center rounded-full px-10 py-3 shadow': type === 'solid' && variant !== 'tertiary',
    'flex h-12 flex-col items-center justify-center rounded-full px-10 py-3 shadow border border-solid': type === 'outline' && variant !== 'tertiary',
    'flex h-12 flex-col items-center justify-center px-10 py-3': type === undefined || null && variant !== 'tertiary',
    'flex px-4 py-1 items-center rounded-full': isTertiarySolid,
    'flex px-4 py-1 items-center rounded-full border border-solid': isTertiaryOutline,
    'bg-[#7E5BFF]': isPrimarySolid && !disabled,
    'border-[#7E5BFF]': isPrimaryOutline && !disabled,
    'bg-[#F9F8FF33]': isPrimarySolid && disabled,
    'bg-[#F9F8FF]': isSecondarySolid && !disabled,
    'border-[#F9F8FF]':isSecondaryOutline,
    'bg-[#F9F8FF99]': isSecondarySolid && disabled,
    'bg-[#9F85FF40]': isTertiarySolid,
    'border-[#9F85FF40]': isTertiaryOutline,
  })

  const labelStyles = cn({
    'text-12 text-white': (isPrimarySolid && !disabled) || (isSecondaryOutline && !disabled) || (variant === 'tertiary' && type !== undefined || null),
    'text-12 text-[#F9F8FF99]': variant === 'primary' && disabled,
    'text-12 text-[#7E5BFF]': (isSecondarySolid) || (isPrimaryOutline),
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