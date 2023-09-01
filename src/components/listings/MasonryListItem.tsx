import React, { useState } from 'react'
import { ImageSourcePropType } from 'react-native'
import { Image } from 'expo-image'

interface MasonryListItemProps {
  image: ImageSourcePropType
  containerWidth: number
}

function MasonryListItem(props: MasonryListItemProps) {
  const { image, containerWidth } = props

  const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

  const [imgHeight, setImageHeight] = useState<number>(190)

  function handleImageHeight(source: {
    url: string
    width: number
    height: number
    mediaType: string | null
  }) {
    const aspectRatio = source.width / source.height
    const imgHeight = aspectRatio * containerWidth
    setImageHeight(imgHeight)
  }

  return (
    <Image
      source={image}
      style={{ height: imgHeight }}
      className="flex w-full mb-2 bg-white rounded-xl"
      placeholder={blurhash}
      contentFit="cover"
      onLoad={(e) => handleImageHeight(e.source)}
      contentPosition="center"
    />
  )
}

export default MasonryListItem
