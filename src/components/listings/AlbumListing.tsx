import { format } from 'date-fns'
import React from 'react'
import { View, Text, Image, ImageBackground } from 'react-native'

interface AlbumListingProps {
  title: string
  dateFrom: Date
  dateTo: Date
  images?: Array<typeof Image>
}

function AlbumListing(props: AlbumListingProps) {
  const {
    title,
    dateFrom = new Date('2020-02-23T00:00:00+0000'),
    dateTo = new Date('2020-04-09T00:00:00+0100'),
  } = props

  return (
    <View className="flex flex-col items-start self-stretch p-2">
      <View className="flex flex-col items-start self-stretch">
        <Text className="font-comfortaa text-[22px] text-white w-full">
          {title}
        </Text>
        <Text className="w-full mt-1 text-xs text-white font-mons">
          {format(dateFrom, 'yyyy MM dd')} - {format(dateTo, 'yyyy MM dd')}
        </Text>
      </View>
      <View className="flex flex-row mt-4">
        <View className="flex flex-row items-start justify-start w-3/5 pr-2 ">
          <Image
            source={require('@/assets/images/20230707_194027.jpg')}
            className="w-full h-[248px] rounded-xl bg-white shadow"
            resizeMode="cover"
          />
        </View>
        <View className="flex flex-col w-2/5 pl-2">
          <Image
            source={require('@/assets/images/20230707_210635.jpg')}
            className="w-full h-[114px] mb-5 bg-white shadow rounded-xl"
            resizeMode="cover"
          />
          <ImageBackground
            source={require('@/assets/images/20230707_184730.jpg')}
            className="w-full h-[114px] flex bg-white shadow items-center justify-center overflow-hidden rounded-xl"
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
