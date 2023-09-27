import React from 'react'
import { View, Text, ImageBackground, ImageSourcePropType } from 'react-native'
import { Image } from 'expo-image'
import { format } from 'date-fns'

interface AlbumListingProps {
  title: string
  dateFrom: Date
  dateTo: Date
  images: ImageSourcePropType[]
}

const FORMAT_STR = 'yyyy LLL dd'

function AlbumListing(props: AlbumListingProps) {
  const { title, images, dateFrom, dateTo } = props

  return (
    <View className="flex flex-col items-start self-stretch p-2">
      <View className="flex flex-col items-start self-stretch">
        <Text className="font-comfortaa text-[22px] text-white w-full">
          {title}
        </Text>
        <Text className="w-full mt-1 text-xs text-white uppercase font-mons">
          {format(dateFrom, FORMAT_STR)} - {format(dateTo, FORMAT_STR)}
        </Text>
      </View>
      <View className="flex flex-row mt-4">
        <View className="flex flex-row items-start justify-start w-3/5 pr-2 ">
          <Image
            source={images[0]}
            className="w-full h-[248px] rounded-xl bg-white"
            contentFit="cover"
          />
        </View>
        <View className="flex flex-col w-2/5 pl-2">
          <Image
            source={images[1]}
            className="w-full h-[114px] mb-5 bg-white rounded-xl"
            contentFit="cover"
          />
          <ImageBackground
            source={images[2]}
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
