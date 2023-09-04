import React, { useState } from 'react'
import { ImageSourcePropType } from 'react-native'
import { Image } from 'expo-image'

interface MasonryListItemProps {
  image: ImageSourcePropType
  containerWidth: number
}

const BLUR_FALLBACK_HASH =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

const IMG_HEIGHT_DEFAULT = 190

function MasonryListItem(props: MasonryListItemProps) {
  const { image, containerWidth } = props

  const [imgHeight, setImageHeight] = useState<number>(IMG_HEIGHT_DEFAULT)

  function handleImageHeight(source: { width: number; height: number }) {
    const aspectRatio = source.width / source.height
    const imgHeight = aspectRatio * containerWidth
    setImageHeight(imgHeight)
  }

  return (
    <Image
      source={image}
      style={{ height: imgHeight }}
      className="flex w-full mb-2 bg-white rounded-xl"
      placeholder={BLUR_FALLBACK_HASH}
      contentFit="cover"
      onLoad={(e) => handleImageHeight(e.source)}
      contentPosition="center"
    />
  )
}

export default MasonryListItem
