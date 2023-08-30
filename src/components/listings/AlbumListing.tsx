import { format } from 'date-fns'
import React from 'react'
import { View, Text, Image } from 'react-native'
// import { Image } from 'expo-image'

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
    <View className="flex flex-col items-start self-stretch gap-4 pl-1">
      <View className="flex flex-col items-start self-stretch gap-1">
        <Text className="font-comfortaa text-[22px] text-white w-full">
          {title}
        </Text>
        <Text className="w-full text-xs text-white font-mons">
          {format(dateFrom, 'yyyy MM dd')} - {format(dateTo, 'yyyy MM dd')}
        </Text>
      </View>
      <View className="flex flex-row items-start justify-start w-full h-auto">
        <Image
          source={require('~/public/images/rectangle-1.png')}
          className="w-[200px] rounded-xl"
        />
        <View className="flex flex-col ml-2 w-[133px] items-start justify-end flex-[1_0_0]">
          <Image
            source={require('~/public/images/rectangle-2.png')}
            className="flex-[1_0_0] self-stretch"
          />
          <Image
            source={require('~/public/images/frame-1.png')}
            className="flex-[1_0_0] self-stretch"
          />
        </View>
      </View>
    </View>
  )
}

export default AlbumListing
