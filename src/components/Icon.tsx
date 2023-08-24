import React, { useState, useEffect, useRef } from 'react'
import { icons } from '@/assets/icons'
import {  IconType, IconProps, IconSize } from '@/types/icon'

const ICON_SIZES = {
  [IconSize.Small]: {
    height: 20,
    width: 20,
  },
  [IconSize.Medium]: {
    height: 30,
    width: 30,
  },
  [IconSize.Large]: {
    height: 35,
    width: 35,
  },
}

function Icon(props: IconProps) {
  const importedIconRef = useRef<IconType>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    async function importIcon()  {
      try {
        const { default: Icon } = await icons[props.name]
        importedIconRef.current = Icon
      } finally {
        setLoading(false)
      }
    }
    importIcon()
  }, [props.name])

  if (loading || !importedIconRef.current) {
    return null
  }

  const ImportedIcon = importedIconRef.current

  return (
    <ImportedIcon 
      width={ICON_SIZES[props.size].width} 
      height={ICON_SIZES[props.size].height} 
      fill={props.colour}  
    />
  )
}

export default Icon