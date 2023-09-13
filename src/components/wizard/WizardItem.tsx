import { WizardItemProps } from '@/types/wizard'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Pressable, View, Image, Text } from 'react-native'
import { Pagination } from 'react-native-snap-carousel'

function WizardItem(props: WizardItemProps) {
  const { item, activeDotIndex, itemsLength, height, carouselRef } = props

  function next() {
    carouselRef.current?.snapToNext()
  }

  return (
    <View className="flex flex-col items-center w-full max-h-full p-5 justify-evenly bg-tuatura">
      <LinearGradient
        colors={['#FF6978', '#7E5BFF']}
        locations={[0, 0.48]}
        style={{ height: height * 0.6, marginTop: height * 0.05 }}
        className="w-full rounded-xl"
      >
        <Image
          source={item.imageUrl}
          style={{ height: height * 0.6 }}
          className="w-full mb-5 bg-white shadow rounded-xl"
          resizeMode="cover"
        />
      </LinearGradient>
      <Pagination
        dotsLength={itemsLength}
        activeDotIndex={activeDotIndex}
        dotStyle={{
          width: 20,
          height: 8,
          borderRadius: 6,
          marginHorizontal: 8,
          backgroundColor: 'rgba(159, 133, 255, 1)',
        }}
        inactiveDotStyle={{
          width: 12,
          height: 12,
          borderRadius: 12,
          marginHorizontal: 8,
          backgroundColor: 'rgba(255, 133, 171, 1)',
        }}
        inactiveDotScale={0.8}
        inactiveDotOpacity={1}
      />
      <View className="flex flex-col min-h-[120px] items-center justify-between">
        <View>
          <Text className="text-2xl text-center font-comfortaa text-ghost ">
            {item.title}
          </Text>
          <Text className="mt-3 text-base text-center font-mont text-ghost">
            {item.body}
          </Text>
        </View>
        {item.actionText === 'Skip' ? (
          <Pressable onPress={next}>
            <Text className="font-mont-medium text-ghost">
              {item.actionText}
            </Text>
          </Pressable>
        ) : (
          <Pressable onPress={item.action}>
            <Text className="font-mont-medium text-ghost">
              {item.actionText}
            </Text>
          </Pressable>
        )}
      </View>
    </View>
  )
}

export default WizardItem
