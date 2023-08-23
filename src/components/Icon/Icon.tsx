import React, { useState, useEffect, useRef } from 'react'
import { icons } from '@/assets/icons'
import {  IconType, IconProps } from '@/types/icon'

function Icon(props: IconProps) {
  const importedIconRef = useRef<IconType>()
  const [loading, setLoading] = useState(false)
  
  const iconSizes = {
    'sm': {
      height: 20,
      width: 20,
    },
    'md': {
      height: 30,
      width: 30,
    },
    'lg': {
      height: 35,
      width: 35,
    },
  }

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
      width={iconSizes[props.size].width} 
      height={iconSizes[props.size].height} 
      fill={props.colour}  
    />
  )
}

export default Icon