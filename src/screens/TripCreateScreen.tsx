import React, { useEffect, useMemo, useRef, useState } from 'react'
import { View, Text, Dimensions, Pressable, ScrollView } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { SetupProps } from '@/types/props'
import FormHeader from '@/components/headers/formHeader/FormHeader'
import FormHeaderButton from '@/components/headers/formHeader/FormHeaderButton'
import FormHeaderTitle from '@/components/headers/formHeader/FormHeaderTitle'
import Icon from '@/components/Icon'
import { IconSize } from '@/types/icon'
import { useColours } from '@/hooks/useTailwind'
import ImageInput from '@/components/inputs/ImageInput'
import { ImageInputSize } from '@/types/imageInput'
import TextInput from '@/components/inputs/TextInput'
import CalendarInput from '@/components/inputs/CalendarInput'
import Map from '@/components/Map'
import { MapRegion, MarkerSize, SearchResult } from '@/types/map'
import BottomSheet from '@/components/BottomSheet'
import SearchInput from '@/components/inputs/SearchInput'
import { ImagePickerAsset } from 'expo-image-picker'
import ImageGrid from '@/components/listings/ImageGrid'
import Button from '@/components/pressables/Button'
import { ButtonType, ButtonVariant } from '@/types/button'
import { Image } from 'expo-image'
import useTripStore from '@/stores/trip'

type Props = SetupProps<'TripCreate'>
enum NewTripSteps {
  TripDetails = 0,
  FindLocation = 1,
  AddLocation = 2,
}

const INITIAL_REGION = {
  latitude: 51.79995404804718,
  longitude: -3.5557029023766518,
  latitudeDelta: 0.3085811511499088,
  longitudeDelta: 0.3895548350484148,
}
function TripCreateScreen(props: Props) {
  const { navigation } = props
  const colours = useColours()

  // Form State
  const {
    newTrip,
    newTripLocation,
    setNewTrip,
    setTripLocation,
    resetNewTrip,
    resetNewTripLocation,
    resetLocations,
    handleCreateTrip,
    handleCreateTripLocation,
    locations,
  } = useTripStore()
  const newTripRef = useRef(newTrip)
  const newTripLocationRef = useRef(newTripLocation)
  const [tripFormErrors, setTripFormErrors] = useState<
    Array<{ field: string; message: string }>
  >([])

  // Navigation State
  const [step, setStep] = useState<NewTripSteps>(0)

  // Search State
  const [query, setQuery] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])

  // Height State
  const { height } = Dimensions.get('window')
  const [headerHeight, setHeaderHeight] = useState(0)

  // Map State
  const regionMarkers = useMemo(() => {
    return (
      locations?.map((location) => ({
        key: location.name,
        size: MarkerSize.LARGE,
        title: location.name,
        description: '',
        coordinate: {
          latitude: location.latitude,
          latitudeDelta: 0.3085811511499088,
          longitude: location.longitude,
          longitudeDelta: 0.3895548350484148,
        },
      })) || []
    )
  }, [locations])

  const [activeRegion, setActiveRegion] = useState({} as MapRegion)

  // Image State
  const [selectedImages, setSelectedImages] = useState<Array<number | string>>(
    [],
  )

  // Search Handlers
  async function handleSearchLocations(query: string) {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${query}`,
      )
      const data = (await response.json()) as SearchResult[]
      setSearchResults(data)
      console.log(data[0].lat)
    } catch (e) {
      console.log('error', e)
    }
  }

  function handleSelectResult(result: SearchResult) {
    setTripLocation({
      name: result.display_name,
      trip_id: newTrip.id,
      coordinates: {
        latitude: parseFloat(result.lat),
        longitude: parseFloat(result.lon),
      },
      images: [],
    })

    clearSearchData()
    setStep(NewTripSteps.AddLocation)
  }

  function clearSearchData() {
    setQuery('')
    setSearchResults([])
  }

  // Form Handlers
  function handleSetDates(dates: { startDate: string; endDate: string }) {
    const newState = {
      ...newTrip,
      start_date: dates.startDate,
      end_date: dates.endDate,
    }
    setNewTrip({ ...newState })
  }

  async function handleSaveLocation() {
    try {
      const response = await handleCreateTripLocation({
        ...newTripLocationRef.current,
      })

      console.log('save location response', response)

      if (response.success) {
        resetNewTripLocation()
        setStep(NewTripSteps.FindLocation)
      }
    } catch (e) {
      console.log(e)
    }
  }

  async function handleValidateTripDetails() {
    const tripDetailsError = []

    if (Object.keys(newTripRef.current).length === 0) {
      tripDetailsError.push({ field: 'name', message: 'Trip name is required' })
      tripDetailsError.push({
        field: 'start_date',
        message: 'Start date is required',
      })
      tripDetailsError.push({
        field: 'end_date',
        message: 'End date is required',
      })
      setTripFormErrors(tripDetailsError)
      return
    }
    if (!newTripRef.current.name || newTripRef.current.name?.length === 0)
      tripDetailsError.push({ field: 'name', message: 'Trip name is required' })
    if (
      !newTripRef.current.start_date ||
      newTripRef?.current.start_date?.length === 0
    )
      tripDetailsError.push({
        field: 'start_date',
        message: 'Start date is required',
      })
    if (
      !newTripRef?.current.end_date ||
      newTripRef.current.end_date.length === 0
    )
      tripDetailsError.push({
        field: 'end_date',
        message: 'End date is required',
      })
    console.log(tripDetailsError)
    if (tripDetailsError.length === 0) {
      const success = await handleCreateTrip(newTripRef.current)
      if (success.success) {
        setStep(() => NewTripSteps.FindLocation)
        setTripFormErrors([])
      }
    } else {
      setTripFormErrors(tripDetailsError)
    }
  }

  // Form Header State handlers
  const formHeaderTitles = useMemo(() => {
    if (step === NewTripSteps.TripDetails)
      return <FormHeaderTitle title="Create trip" />
    if (step === NewTripSteps.FindLocation)
      return <FormHeaderTitle title="Find location" />
    if (step === NewTripSteps.AddLocation)
      return <FormHeaderTitle title="Add location" />
  }, [step])

  const formHeaderLeft = useMemo(() => {
    if (step === NewTripSteps.TripDetails)
      return (
        <FormHeaderButton
          onPress={() => {
            navigation.goBack()
          }}
          label="Cancel"
        />
      )
    if (step === NewTripSteps.FindLocation)
      return (
        <FormHeaderButton
          onPress={() => setStep(NewTripSteps.TripDetails)}
          iconLeft={
            <Icon
              name="ChevronLeftIcon"
              size={IconSize.Small}
              colour={colours.ghost}
            />
          }
        />
      )
    if (step === NewTripSteps.AddLocation)
      return (
        <FormHeaderButton
          onPress={() => {
            resetNewTripLocation()
            setStep(NewTripSteps.FindLocation)
          }}
          iconLeft={
            <Icon
              name="ChevronLeftIcon"
              size={IconSize.Small}
              colour={colours.ghost}
            />
          }
        />
      )
  }, [step])

  const formHeaderRight = useMemo(() => {
    if (step === NewTripSteps.TripDetails)
      return (
        <FormHeaderButton
          onPress={() => {
            handleValidateTripDetails()
          }}
          label="Next"
          iconRight={
            <Icon
              name="ChevronRightIcon"
              size={IconSize.Small}
              colour={colours.ghost}
            />
          }
        />
      )
    if (step === NewTripSteps.FindLocation)
      return (
        <>
          {locations?.length > 0 && (
            <FormHeaderButton
              onPress={async () => {
                navigation.navigate('TripDashboard')
              }}
              label="Done"
            />
          )}
        </>
      )
    if (step === NewTripSteps.AddLocation)
      return <FormHeaderButton onPress={handleSaveLocation} label="Save" />
  }, [step])

  // Search Effect
  useEffect(() => {
    if (query.length > 2) {
      handleSearchLocations(query)
    }
    if (query.length === 0) {
      setSearchResults([])
    }
  }, [query])

  // Set Refs on update of state for validation.
  useEffect(() => {
    newTripRef.current = newTrip
  }, [newTrip])

  useEffect(() => {
    newTripLocationRef.current = newTripLocation
  }, [newTripLocation])

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        resetNewTrip()
        resetNewTripLocation()
        resetLocations()
      }
    }, []),
  )

  return (
    <View
      style={{ flex: 1 }}
      className="flex items-center w-full h-screen bg-tuatura jusify-center"
    >
      <View
        onLayout={(e) => setHeaderHeight(e.nativeEvent.layout.height)}
        className="px-6 pt-6 mt-8 bg-tuatura/75 blur-3xl"
      >
        <FormHeader
          leftComponent={formHeaderLeft}
          centerComponent={formHeaderTitles}
          rightComponent={formHeaderRight}
        />
      </View>
      {step === NewTripSteps.TripDetails ? (
        <ScrollView automaticallyAdjustKeyboardInsets={true}>
          <View className="flex flex-col items-center justify-center w-full px-6 space-y-8">
            <ImageInput
              size={ImageInputSize.Large}
              onChange={(e) => {
                setNewTrip({
                  ...newTrip,
                  cover_photo: {
                    uri: e[0].uri,
                    type: e[0].type,
                    name: e[0].fileName || '',
                  },
                })
              }}
            />
            <View className="w-full">
              <TextInput
                placeholder="Trip name"
                error={
                  tripFormErrors.find((error) => error.field === 'name')
                    ?.message
                }
                value={newTrip.name}
                onChangeText={(text) => {
                  setNewTrip({ ...newTrip, name: text })
                }}
              />
            </View>
            <View className="flex flex-row items-center justify-between w-full">
              <CalendarInput
                startDateError={
                  tripFormErrors.find((err) => err.field === 'start_date')
                    ?.message
                }
                endDateError={
                  tripFormErrors.find((err) => err.field === 'end_date')
                    ?.message
                }
                setFormDates={(dates) => handleSetDates(dates)}
              />
            </View>
          </View>
        </ScrollView>
      ) : step === NewTripSteps.FindLocation ? (
        <View
          style={{ height: height - (headerHeight + 32) }}
          className="w-full"
        >
          <Map
            initialRegion={INITIAL_REGION}
            handleRegionChange={(region) => setActiveRegion(region)}
            region={activeRegion}
            markers={regionMarkers}
          />
          <BottomSheet open={true} snapPoints={['10%', '33%', '50%']}>
            <View className="flex flex-col w-full space-y-4">
              <View className="relative flex flex-col">
                <SearchInput
                  value={query}
                  onChange={(e) => setQuery(e)}
                  placeholder="Search"
                />
                <ScrollView
                  className="absolute z-10 bg-ghost"
                  style={{
                    top: 50,
                    zIndex: 1,
                    elevation: 1,
                    maxHeight: height * 0.22,
                  }}
                >
                  {searchResults.map((result) => (
                    <Pressable
                      key={result.place_id}
                      className="px-2 py-1"
                      onPress={() => handleSelectResult(result)}
                    >
                      <Text>{result.display_name}</Text>
                    </Pressable>
                  ))}
                </ScrollView>
              </View>
              <Text
                className="text-base text-ghost font-mont"
                style={{ zIndex: -1, elevation: -1 }}
              >
                Locations
              </Text>
              <ScrollView
                style={{ maxHeight: height * 0.22, zIndex: -1, elevation: -1 }}
                className="space-y-2"
              >
                {locations?.map((location) => {
                  const markerIndex = regionMarkers.findIndex(
                    (marker) => marker.key === location.name,
                  )
                  return (
                    <Pressable
                      key={location.name}
                      onPress={() =>
                        setActiveRegion(regionMarkers[markerIndex].coordinate)
                      }
                      className="flex flex-row items-center px-5 py-2 space-x-2 rounded-xl bg-tropical-indigo/10"
                    >
                      <View className="flex items-center justify-center w-12 h-12 border rounded-full">
                        <Image
                          source={
                            location.images?.length > 0
                              ? location.images[0].path
                              : ''
                          }
                          className="w-12 h-12 rounded-full"
                          contentFit="cover"
                          contentPosition="center"
                        />
                      </View>
                      <Text className="text-base text-ghost font-mont-medium">
                        {' '}
                        {location.name}{' '}
                      </Text>
                    </Pressable>
                  )
                })}
              </ScrollView>
              {regionMarkers.length === 0 && locations?.length === 0 && (
                <Text className="text-sm text-ghost/80 font-mont-light">
                  Currently no locations added, use the search above to drop
                  your pin and select to edit location details.
                </Text>
              )}
            </View>
          </BottomSheet>
        </View>
      ) : (
        <View
          style={{ height: height - (headerHeight + 32) }}
          className="w-full px-6 pt-6"
        >
          <TextInput
            value={newTripLocation.name}
            placeholder="Location"
            onChangeText={(text) => {
              setTripLocation({
                ...newTripLocation,
                name: text,
              })
            }}
            className="mb-6"
          />
          <View className="w-full pt-6">
            <ImageInput
              size={ImageInputSize.Small}
              onChange={(e) => {
                console.log('ImageRecived at page ', e)
                const images = newTripLocation.images || []
                e.map((image: ImagePickerAsset) =>
                  images.push({
                    type: image.type || '',
                    name: image.fileName || '',
                    uri: image.uri,
                  }),
                )
                setTripLocation({
                  ...newTripLocation,
                  images: images,
                })
              }}
            />
          </View>
          {newTripLocation?.images?.length > 0 && (
            <View className="pt-5">
              <View className="flex flex-row items-center justify-between py-5">
                <Text className="text-base font-mont text-ghost">
                  Uploaded Images
                </Text>
                {selectedImages.length > 0 && (
                  <Button
                    label={'Delete'}
                    variant={ButtonVariant.Tertiary}
                    type={ButtonType.Solid}
                  />
                )}
              </View>
              <ImageGrid
                images={newTripLocation.images}
                selectedItems={selectedImages}
                onSelectedImagesChange={setSelectedImages}
              />
            </View>
          )}
        </View>
      )}
    </View>
  )
}

TripCreateScreen.title = 'Create Trip'
export default TripCreateScreen
