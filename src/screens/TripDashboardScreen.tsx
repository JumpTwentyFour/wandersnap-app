import React, { useEffect, useMemo, useState } from 'react'
import {
  View,
  Text,
  LayoutChangeEvent,
  Dimensions,
  Pressable,
} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import DashboardHeader from '@/components/headers/DashboardHeader'
import IconButton from '@/components/pressables/IconButton'
import AlbumListing from '@/components/listings/AlbumListing'

import { IconSize } from '@/types/icon'
import { SetupProps } from '@/types/props'

import { useColours } from '@/hooks/useTailwind'

import useTripStore from '@/stores/trip'
import { TRIPS } from '@/helper/tripDashboardHelper'

type Props = SetupProps<'TripDashboard'>

function TripDashboardScreen({ navigation }: Props) {
  const [headerHeight, setHeaderHeight] = useState(0)
  const { height } = Dimensions.get('window')
  const colours = useColours()
  const { setTrip, trips, fetchTrips } = useTripStore()

  function handleSetHeaderHeight(e: LayoutChangeEvent) {
    setHeaderHeight(e.nativeEvent.layout.height)
  }

  const contentViewStyles = useMemo(() => {
    return {
      height: TRIPS.length === 0 ? height - headerHeight : height,
      flex: 1,
    }
  }, [headerHeight])

  useEffect(() => {
    fetchTrips()
  }, [])

  return (
    <View style={{ flex: 1 }} className="relative w-full h-screen bg-tuatura">
      <View
        onLayout={(e) => handleSetHeaderHeight(e)}
        className="flex flex-row items-center justify-between px-5 pt-16"
      >
        <DashboardHeader>My Trips</DashboardHeader>
        <IconButton
          icon="PersonIcon"
          size={IconSize.Medium}
          colour={colours.ghost}
          bgClass="bg-transparent"
          onPress={() => navigation.navigate('Account')}
        />
      </View>
      {TRIPS.length === 0 ? (
        <View
          style={contentViewStyles}
          className="flex items-center justify-center"
        >
          <IconButton
            size={IconSize.Large}
            icon="PlusIcon"
            colour={colours.tuatura}
            bgClass="bg-tropical-indigo"
            onPress={() => navigation.navigate('TripCreate')}
          />
          <Text className="mt-6 text-xl text-center text-ghost font-comfortaa-light">
            Create your first trip, and start adding your snaps
          </Text>
        </View>
      ) : (
        <>
          <View style={{ flex: 1, height: height }} className="py-6">
            <FlatList
              style={contentViewStyles}
              data={trips && trips.length > 0 ? trips : TRIPS}
              renderItem={({ item }) => (
                <Pressable
                  key={item.id}
                  onPress={() => {
                    setTrip(item)
                    navigation.navigate('Trip')
                  }}
                >
                  <AlbumListing
                    name={item.name}
                    cover_photo={item.cover_photo}
                    // TODO: images could be the first two images of the first location in the trip
                    images={[]}
                    dateFrom={new Date(item.end_date)}
                    dateTo={new Date(item.start_date)}
                  />
                </Pressable>
              )}
              className="px-3"
            ></FlatList>
          </View>
          <View
            className="absolute flex flex-row items-center justify-center w-full"
            style={{ top: height * 0.9 }}
          >
            <IconButton
              size={IconSize.Medium}
              icon="PlusIcon"
              colour={colours.tuatura}
              bgClass="bg-tropical-indigo"
              onPress={() => navigation.navigate('TripCreate')}
            />
          </View>
        </>
      )}
    </View>
  )
}

TripDashboardScreen.title = 'Trip Dashboard'
export default TripDashboardScreen
