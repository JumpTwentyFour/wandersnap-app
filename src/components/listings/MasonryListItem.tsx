import React, { useState } from 'react'
import { ImageSourcePropType, Pressable } from 'react-native'
import { Image } from 'expo-image'

interface MasonryListItemProps {
  image: ImageSourcePropType
  containerWidth: number
  handleNavigate: (img: ImageSourcePropType) => void
}

const IMG_HEIGHT_DEFAULT = 190

function MasonryListItem(props: MasonryListItemProps) {
  const { image, containerWidth, handleNavigate } = props

  const [imgHeight, setImageHeight] = useState<number>(IMG_HEIGHT_DEFAULT)

  function handleImageHeight(source: { width: number; height: number }) {
    const aspectRatio = source.width / source.height
    const imgHeight = aspectRatio * containerWidth
    setImageHeight(imgHeight)
  }

  return (
    <Pressable onPress={() => handleNavigate(image)}>
      <Image
        source={image}
        style={{ height: imgHeight }}
        className="w-full mb-2 bg-white rounded-xl"
        contentFit="cover"
        onLoad={(e) => {
          handleImageHeight(e.source)
        }}
      />
    </Pressable>
  )
}

export default MasonryListItem
