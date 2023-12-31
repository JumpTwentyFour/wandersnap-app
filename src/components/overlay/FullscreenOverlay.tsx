import React from 'react'
import { View, Platform } from 'react-native'
import { FullWindowOverlay } from 'react-native-screens'

interface Props {
  children?: React.ReactNode
}

function FullscreenOverlay(props: Props) {
  const Element = Platform.OS === 'ios' ? FullWindowOverlay : View

  return <Element className="bg-tuatura/90">{props.children}</Element>
}

export default FullscreenOverlay
