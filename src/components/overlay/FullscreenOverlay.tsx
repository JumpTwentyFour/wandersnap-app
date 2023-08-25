import { View, Platform } from 'react-native'
import { FullWindowOverlay } from 'react-native-screens'

function FullscreenOverlay() {
  return Platform.OS === 'ios' ? FullWindowOverlay : View
}

export default FullscreenOverlay
