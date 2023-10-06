import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  ImageSourcePropType,
  ActivityIndicator,
  Pressable,
} from 'react-native'
import { BlurView } from 'expo-blur'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'
import { ScrollView } from 'react-native-gesture-handler'

import TripHeader from '@/components/headers/TripHeader'
import BottomSheet from '@/components/BottomSheet'
import Tabs from '@/components/tabs/Tabs'
import TabsView from '@/components/tabs/TabsView'
import Icon from '@/components/Icon'
import Toggle from '@/components/pressables/Toggle'
import LocationListing from '@/components/listings/LocationListing'
import MasonryListing from '@/components/listings/MasonryListing'
import Map from '@/components/Map'

import { SetupProps } from '@/types/props'
import { IconSize } from '@/types/icon'
import { MarkerSize } from '@/types/map'

import {
  LOCATION_LISTINGS,
  MASONRY_LISTING_ITEMS,
} from '@/helper/tripsScreenHelper'
import useTripStore from '@/stores/trip'

type Props = SetupProps<'Trip'>
function TripScreen(props: Props) {
  const { navigation } = props
  const { trip, handleRemoveTrip } = useTripStore()

  const [sheetOpen, setSheetOpen] = useState(true)
  const [tabIndex, setTabIndex] = useState(0)
  const [snapPointIndex, setSnapPointIndex] = useState(0)
  const [toggleValue, setToggleValue] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const [imageLoaded, setImageLoad] = useState(false)

  const height = Dimensions.get('window').height
  const topValueStyle = useSharedValue<number>(height * 0.3)

  useEffect(() => {
    topValueStyle.value = withSpring(
      snapPointIndex == 0 ? height * 0.3 : height * 0.15,
      {
        duration: 2000,
        stiffness: 100,
        dampingRatio: 0.6,
      },
    )
  }, [snapPointIndex])

  const handleNavigateToImage = (img: ImageSourcePropType) => {
    setSheetOpen(false)
    setTimeout(() => {
      navigation.navigate('Image', { image: img, location: 'Angkor Wat' })
    }, 500)
  }

  function handleNavigateBack() {
    setSheetOpen(false)
    setTimeout(() => {
      navigation.goBack()
    })
  }

  function handleMenu() {
    setShowMenu(!showMenu)
  }

  async function handleDelete() {
    try {
      const response = await handleRemoveTrip(trip.id.toString())

      if (response.success) {
        navigation.navigate('TripDashboard')
      } else {
        console.log(response.message)
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => navigation.addListener('focus', () => setSheetOpen(true)), [])

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={trip.cover_photo ? trip.cover_photo : MASONRY_LISTING_ITEMS[0]}
        onLoad={() => setImageLoad(true)}
        style={{ height: height }}
        className="relative flex w-full pt-12"
        resizeMode="cover"
      >
        {imageLoaded && sheetOpen ? (
          <>
            <TripHeader
              handleNavigateBack={handleNavigateBack}
              menuOpen={showMenu}
              handleMenu={handleMenu}
            />
            {showMenu && (
              <View className="absolute flex flex-col items-center justify-center w-24 p-4 space-y-4 bg-white rounded-md shadow right-6 top-24">
                <Pressable>
                  <Text className="text-base font-mont">Edit</Text>
                </Pressable>
                <Pressable onPress={handleDelete}>
                  <Text className="text-base font-mont">Delete</Text>
                </Pressable>
              </View>
            )}
            <Animated.View
              style={{
                top: 0,
                transform: [{ translateY: topValueStyle }],
              }}
              className="absolute w-full transform"
            >
              <BlurView
                intensity={20}
                tint="dark"
                className="flex flex-col px-4 py-10"
              >
                <Text className="text-3xl text-ghost font-comfortaa">
                  {trip.name || 'South East Asia'}
                </Text>
                <Text className="text-xs text-ghost font-mont-medium">
                  {(trip.start_date || '23 FEB 2020') +
                    ' - ' +
                    (trip.end_date || '9 APR 2020')}
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
          </>
        ) : (
          <View
            className="flex flex-col items-center justify-center w-full"
            style={{ height: height }}
          >
            <ActivityIndicator size="large" color={'#9F85FF'} />
          </View>
        )}
        <BottomSheet open={sheetOpen} setSnapPointIndex={setSnapPointIndex}>
          <Tabs value={tabIndex} onChange={setTabIndex}>
            <Tabs.Item title="Snaps" />
            <Tabs.Item title="Locations" />
          </Tabs>

          <TabsView value={tabIndex} onChange={setTabIndex}>
            <TabsView.Item className="pt-8">
              <ScrollView className="pb-6 " style={{ height: height * 0.58 }}>
                {/* ~TODO: Pass all images for trip. currently api setup to only return images from location. */}
                <MasonryListing
                  images={MASONRY_LISTING_ITEMS}
                  handleNavigate={handleNavigateToImage}
                />
              </ScrollView>
            </TabsView.Item>
            <TabsView.Item className="relative pt-8">
              <ScrollView
                className="relative pb-6"
                style={{ height: height * 0.58 }}
              >
                {!toggleValue ? (
                  // TODO: Pass Locations with Trip data from tripStore when API is implemented
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
