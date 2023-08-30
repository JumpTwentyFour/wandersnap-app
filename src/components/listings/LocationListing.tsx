import React from 'react'
import { View, Image, Text, Pressable, ImageSourcePropType } from 'react-native'
import Icon from '../Icon'
import { IconSize } from '@/types/icon'
import { useColours } from '@/hooks/useTailwind'

interface LocationListingProps {
  locations?: Array<{
    name: string
    image_url: ImageSourcePropType
    image_count: number
  }>
}

function LocationListing(props: LocationListingProps) {
  const { locations } = props

  const colours = useColours()

  return (
    <View className="flex flex-col items-start justify-end w-full gap-5">
      <View className="flex flex-row flex-wrap items-center justify-start w-full h-auto">
        {locations?.map((location, ix) => {
          return (
            <View
              key={location.name + ix}
              className="flex flex-col items-start justify-center w-1/2 px-[10px] mt-2"
            >
              <Image
                source={location.image_url}
                className="w-40 h-40 rounded-xl"
              ></Image>
              <View className="flex flex-row self-stretch justify-center my-2">
                <Text className="flex-[1_0_0] font-mont text-sm text-white">
                  {location.name}
                </Text>
                <Pressable className="flex flex-col items-center justify-center">
                  <Icon
                    name="EllipsisIcon"
                    size={IconSize.Small}
                    colour={colours.ghost}
                  />
                </Pressable>
              </View>
              <View className="flex flex-row items-start justify-start">
                <Icon
                  name="PhotoIcon"
                  size={IconSize.Small}
                  colour={colours.ghost}
                />
                <Text className="flex-[1_0_0] ml-2 font-mons text-sm text-white">
                  {location.image_count} Photos
                </Text>
              </View>
            </View>
          )
        })}

        {/* <View className="flex flex-col items-start justify-center w-1/2 px-[10px]">
          <Image
            source={require('~/public/images/rectangle-2.png')}
            className="w-40 h-40 rounded-xl"
          ></Image>
          <View className="flex flex-row self-stretch justify-center ">
            <Text className="flex-[1_0_0] font-mons text-sm text-white">
              Batu Caves
            </Text>
            <Pressable className="flex flex-col items-center justify-center">
              <Icon
                name="EllipsisIcon"
                size={IconSize.Small}
                colour={colours.ghost}
              />
            </Pressable>
          </View>
          <View className="flex flex-row items-start justify-start">
            <Icon
              name="PhotoIcon"
              size={IconSize.Small}
              colour={colours.ghost}
            />
            <Text className="flex-[1_0_0] ml-2 font-mons text-sm text-white">
              121 Photos
            </Text>
          </View>
        </View>
        <View className="flex flex-col items-start justify-center w-1/2 px-[10px]">
          <Image
            source={require('~/public/images/rectangle-2.png')}
            className="w-40 h-40 rounded-xl"
          ></Image>
          <View className="flex flex-row self-stretch justify-center ">
            <Text className="flex-[1_0_0] font-mons text-sm text-white">
              Batu Caves
            </Text>
            <Pressable className="flex flex-col items-center justify-center">
              <Icon
                name="EllipsisIcon"
                size={IconSize.Small}
                colour={colours.ghost}
              />
            </Pressable>
          </View>
          <View className="flex flex-row items-start justify-start">
            <Icon
              name="PhotoIcon"
              size={IconSize.Small}
              colour={colours.ghost}
            />
            <Text className="flex-[1_0_0] ml-2 font-mons text-sm text-white">
              121 Photos
            </Text>
          </View>
        </View> */}
      </View>
    </View>
  )
}

export default LocationListing

{
  /* <View className="flex flex-row gap-5 px-5 pt-5">
<View className="flex flex-col items-start gap-[6px]">
  <View className="flex flex-row items-center w-40 h-40 bg-white">
    <Image
      source={require('~/public/images/rectangle-2.png')}
      className="w-full h-full rounded-xl"
    ></Image>
  </View>
  <View className="flex justify-center self-stretch gap-[10px]">
    <Text className="flex-[1_0_0] font-mons text-sm text-white">
      Batu Caves
    </Text>
    <Pressable className="flex flex-col justify-center items-center gap-[10px]">
      <Icon
        name="EllipsisIcon"
        size={IconSize.Small}
        colour={colours.ghost}
      />
    </Pressable>
  </View>
  <View className="flex flex-col justify-center items-start gap-[6px]">
    <Icon
      name="PhotoIcon"
      size={IconSize.Small}
      colour={colours.ghost}
    />
    <Text className="flex-[1_0_0] font-mons text-sm text-white">
      121 Photos
    </Text>
  </View>
</View>
</View> */
}
