import React, { useEffect, useMemo, useState } from 'react'
import { SetupProps } from '@/types/props'
import { View, Text, ImageBackground, Dimensions } from 'react-native'
import ImageGridImage2 from '@/assets/images/fossil.jpeg'
import TripHeader from '@/components/headers/TripHeader'
import BottomSheet from '@/components/BottomSheet'
import Tabs from '@/components/tabs/Tabs'
import TabsView from '@/components/tabs/TabsView'
import Icon from '@/components/Icon'
import { IconSize } from '@/types/icon'
import { BlurView } from 'expo-blur'
import ScrollView from '@/components/views/ScrollView'
import MasonryListing from '@/components/listings/MasonryListing'
import {
  LOCATION_LISTINGS,
  MASONRY_LISTING_ITEMS,
} from '@/helper/tripsScreenHelper'
import Toggle from '@/components/pressables/Toggle'
import LocationListing from '@/components/listings/LocationListing'
import Map from '@/components/Map'
import { MarkerSize } from '@/types/map'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'

type Props = SetupProps<'Trip'>

function TripScreen(props: Props) {
  const { navigation } = props
  const height = Dimensions.get('window').height

  const topValueStyle = useSharedValue<number>(height * 0.3)

  const [sheetOpen, setSheetOpen] = useState(false)

  React.useEffect(
    () => navigation.addListener('focus', () => setSheetOpen(true)),
    [],
  )

  React.useEffect(
    () => navigation.addListener('blur', () => setSheetOpen(false)),
    [],
  )

  const [tabIndex, setTabIndex] = useState(0)
  const [snapPointIndex, setSnapPointIndex] = useState(0)
  const [toggleValue, setToggleValue] = useState(false)

  useEffect(() => {
    topValueStyle.value = withSpring(
      snapPointIndex == 0 ? height * 0.15 : height * 0.3,
      {
        duration: 2000,
        stiffness: 100,
        dampingRatio: 0.5,
      },
    )
  }, [snapPointIndex])

  const infoStlyes = useMemo(() => {
    return {
      top: topValueStyle.value,
    }
  }, [topValueStyle.value])

  return (
    <View>
      <ImageBackground
        source={ImageGridImage2}
        style={{ height: height }}
        className="relative flex w-full pt-16"
        resizeMode="cover"
      >
        <TripHeader />
        <Animated.View style={infoStlyes} className="absolute w-full">
          <BlurView
            intensity={20}
            tint="dark"
            className="flex flex-col px-4 py-10"
          >
            <Text className="text-3xl text-ghost font-comfortaa">
              South East Asia
            </Text>
            <Text className="text-xs text-ghost font-mont-medium">
              23 FEB 2020 - 9 APR 2020
            </Text>
            {snapPointIndex === 0 && (
              <View className="flex flex-row items-center gap-4 mt-1">
                <View className="flex flex-row items-center gap-1">
                  <Icon
                    name="MapPinIcon"
                    size={IconSize.Small}
                    colour="#fefefe"
                  />
                  <Text className="text-ghost">12 locations</Text>
                </View>
                <View className="flex flex-row items-center gap-1">
                  <Icon
                    name="ImageIcon"
                    size={IconSize.Small}
                    colour="#fefefe"
                  />
                  <Text className="text-ghost">121 photos</Text>
                </View>
              </View>
            )}
          </BlurView>
        </Animated.View>
        <BottomSheet open={sheetOpen} setSnapPointIndex={setSnapPointIndex}>
          <Tabs value={tabIndex} onChange={setTabIndex}>
            <Tabs.Item title="Snaps" />
            <Tabs.Item title="Locations" />
          </Tabs>

          <TabsView value={tabIndex} onChange={setTabIndex}>
            <TabsView.Item className="pt-8">
              <ScrollView className="pb-6 " style={{ height: height * 0.58 }}>
                <MasonryListing
                  images={MASONRY_LISTING_ITEMS}
                  navigation={navigation}
                />
              </ScrollView>
            </TabsView.Item>
            <TabsView.Item className="relative">
              <ScrollView
                className="relative pb-6"
                style={{ height: height * 0.58 }}
              >
                {!toggleValue ? (
                  <LocationListing locations={LOCATION_LISTINGS} />
                ) : (
                  <View style={{ height: height * 0.58 }}>
                    <Map
                      initialRegion={{
                        latitude: 52.470432487287184,
                        latitudeDelta: 0.3085811511499088,
                        longitude: -1.8935513857597124,
                        longitudeDelta: 0.3895548350484148,
                      }}
                      markers={[
                        {
                          key: 'j24',
                          size: MarkerSize.LARGE,
                          title: 'Jump24',
                          description:
                            '174 Great Hampton Row, Birmingham, West Midlands, B19 3JP',
                          coordinate: {
                            latitude: 52.489946,
                            longitude: -1.906173,
                          },
                        },
                      ]}
                    />
                  </View>
                )}
              </ScrollView>
              <View
                className="absolute z-10 flex flex-row justify-center w-full px-12"
                style={{ top: height * 0.52, height: 20 }}
              >
                <Toggle
                  options={['Grid', 'Map']}
                  iconOptions={['GridIcon', 'MapIcon']}
                  value={toggleValue}
                  onChange={(value) => {
                    setToggleValue(value)
                  }}
                />
              </View>
            </TabsView.Item>
          </TabsView>
        </BottomSheet>
      </ImageBackground>
    </View>
  )
}

TripScreen.title = 'Trip'
export default TripScreen
