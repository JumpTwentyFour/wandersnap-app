import React from 'react'
import { View, Text, ImageBackground, ImageSourcePropType } from 'react-native'
import { Image } from 'expo-image'
import { format } from 'date-fns'

import AlbumImage1 from '@/assets/images/20230707_194027.jpg'
import AlbumImage2 from '@/assets/images/20230707_210635.jpg'
import AlbumImage3 from '@/assets/images/20230707_184730.jpg'

const ALBUM_IMAGES = [AlbumImage1, AlbumImage2, AlbumImage3]
interface AlbumListingProps {
  name: string
  dateFrom: Date
  dateTo: Date
  cover_photo: ImageSourcePropType
  images: ImageSourcePropType[]
}

const FORMAT_STR = 'yyyy LLL dd'

function AlbumListing(props: AlbumListingProps) {
  const { name, dateFrom, dateTo } = props

  return (
    <View className="flex flex-col items-start self-stretch p-2">
      <View className="flex flex-col items-start self-stretch">
        <Text className="font-comfortaa text-[22px] text-white w-full">
          {name}
        </Text>
        <Text className="w-full mt-1 text-xs text-white uppercase font-mons">
          {format(dateFrom, FORMAT_STR)} - {format(dateTo, FORMAT_STR)}
        </Text>
      </View>
      <View className="flex flex-row mt-4">
        <View className="flex flex-row items-start justify-start w-3/5 pr-2 ">
          <Image
            source={ALBUM_IMAGES[0]}
            className="w-full h-[248px] rounded-xl bg-white"
            contentFit="cover"
          />
        </View>
        <View className="flex flex-col w-2/5 pl-2">
          <Image
            source={ALBUM_IMAGES[1]}
            className="w-full h-[114px] mb-5 bg-white rounded-xl"
            contentFit="cover"
          />
          <ImageBackground
            source={ALBUM_IMAGES[2]}
            className="w-full h-[114px] flex bg-white items-center justify-center overflow-hidden rounded-xl"
            resizeMode="cover"
          >
            <View className="flex flex-row items-center justify-center w-full bg-tuatura/50 blur-[22px] h-11">
              <Text className="text-xl text-white font-mont">+120</Text>
            </View>
          </ImageBackground>
        </View>
      </View>
    </View>
  )
}

export default AlbumListing
