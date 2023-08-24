import React from 'react'
import cn from 'classnames'
import { Pressable } from 'react-native'
import { IconButtonProps } from '@/types/iconButtton'
import Icon from '../Icon/Icon'
import { IconSize } from '@/types/icon'

export const IconButton = (props:IconButtonProps): JSX.Element => {
  const {
    size,
    colour,
    bgClass = '',
    icon,
    disabled = false,
    onPress,
  } = props

  const buttonBackground = bgClass.length === 0 ? 'bg-indigo-300' : bgClass

  const buttonStyles = cn({
    'flex items-center justify-center rounded-full': true,
    'h-8 w-8': size === IconSize.Small,
    'h-11 w-11': size === IconSize.Medium,
    'h-14 w-14': size === IconSize.Large,
  })


  return (
    <Pressable onPress={onPress} className={cn(buttonStyles, buttonBackground)} disabled={disabled}>
      <Icon name={icon} size={size} colour={colour} />
    </Pressable>
  )
}

export default IconButton