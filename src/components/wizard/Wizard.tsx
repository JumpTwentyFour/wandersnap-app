import React, { useRef } from 'react'
import Carousel from 'react-native-snap-carousel'
import { View } from 'react-native'
import { animatedStyle } from '@/utils/carouselAnimation'
import WizardItem from './WizardItem'
import { WizardProps, WizardItemType } from '@/types/wizard'

function Wizard(props: WizardProps) {
  const { data, height, width, activeDotIndex, setActiveDotIndex } = props

  const sliderWidth = width
  const carouselHeight = height
  const carouselRef = useRef<Carousel<unknown>>(null)
  const itemWidth = sliderWidth

  return (
    <View
      className="flex flex-col items-start justify-start w-full h-full bg-tuatura"
      style={{ height: carouselHeight }}
    >
      <Carousel
        ref={carouselRef}
        data={data}
        layout={'default'}
        renderItem={({ item, index }) => (
          <WizardItem
            carouselRef={carouselRef}
            activeDotIndex={activeDotIndex}
            item={item as WizardItemType}
            index={index}
            height={carouselHeight}
            itemsLength={data.length}
          />
        )}
        activeSlideAlignment="start"
        sliderWidth={sliderWidth}
        slideInterpolatedStyle={animatedStyle}
        itemWidth={itemWidth}
        onSnapToItem={(index) => setActiveDotIndex(index)}
      />
    </View>
  )
}

export default Wizard
