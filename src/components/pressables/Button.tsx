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
    variant = 'primary',
    type,
    label = 'Button',
    disabled = false,
    onPress,
  } = props

  const isPrimarySolid = variant === 'primary' && type === 'solid'
  const isPrimaryOutline = variant === 'primary' && type === 'outline'
  const isSecondarySolid = variant === 'secondary' && type === 'solid'
  const isSecondaryOutline = variant === 'secondary' && type === 'outline'

  const buttonStyles = cn({
    'flex h-12 flex-col items-center justify-center rounded-full px-10 py-3 shadow': type === 'solid',
    'flex h-12 flex-col items-center justify-center rounded-full px-10 py-3 shadow border border-solid': type === 'outline',
    'flex h-12 flex-col items-center justify-center px-10 py-3': type === undefined || null,
    'bg-[#7E5BFF]': isPrimarySolid && !disabled,
    'border-[#7E5BFF]': isPrimaryOutline && !disabled,
    'bg-[#F9F8FF33]': isPrimarySolid && disabled,
    'bg-[#F9F8FF]': isSecondarySolid && !disabled,
    'border-[#F9F8FF]':isSecondaryOutline,
    'bg-[#F9F8FF99]': isSecondarySolid && disabled,
  })

  const labelStyles = cn({
    'text-12 text-white': (isPrimarySolid && !disabled) || (isSecondaryOutline && !disabled),
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
