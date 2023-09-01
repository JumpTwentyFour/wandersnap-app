import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface OverlayState {
  showStatusBar: boolean
  setShowStatusBar: (show: boolean) => void
}

const useOverlayStore = create<OverlayState>()(
  devtools(
    persist(
      (set) => ({
        showStatusBar: true,
        setShowStatusBar: (show) => set({ showStatusBar: show }),
      }),
      {
        name: 'overlay-store',
      },
    ),
  ),
)

export default useOverlayStore
