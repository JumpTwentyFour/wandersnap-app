import { StoreApi, create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ImageSourcePropType } from 'react-native'

type Set<T> = StoreApi<T>['setState']

// TODO: Update types when API is implemented
type Trip = {
  id: string | number
  dateFrom: Date | string
  dateTo: Date | string
  title: string
  images: ImageSourcePropType[]
}
interface TripState {
  trip: Trip
  trips: Trip[]
  setTrip: (trip: Trip) => void
}

const store = (set: Set<TripState>): TripState => {
  const trip = <Trip>{}
  const trips = <Trip[]>[]

  const setTrip = (trip: Trip) => {
    set({
      trip: trip,
    })
  }

  return {
    trip,
    trips,
    setTrip,
  }
}

const useTripStore = create<TripState>()(
  devtools(
    persist(store, {
      name: 'trip-store',
      storage: createJSONStorage(() => AsyncStorage),
    }),
  ),
)

export default useTripStore
