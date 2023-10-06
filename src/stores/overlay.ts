import AsyncStorage from '@react-native-async-storage/async-storage'
import { StoreApi, create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

interface OverlayState {
  showStatusBar: boolean
  setShowStatusBar: (show: boolean) => void
}

type Set<T> = StoreApi<T>['setState']

const store = (set: Set<OverlayState>): OverlayState => {
  function setShowStatusBar(show: boolean) {
    set({ showStatusBar: show })
  }

  return {
    showStatusBar: true,

    setShowStatusBar,
  }
}

const useOverlayStore = create<OverlayState>()(
  devtools(
    persist(store, {
      name: 'overlay-store',
      storage: createJSONStorage(() => AsyncStorage),
    }),
  ),
)

export default useOverlayStore
