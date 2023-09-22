import React from 'react'
import {
  LayoutChangeEvent,
  ScrollView as NativeScrollView,
  StyleProp,
  ViewStyle,
} from 'react-native'
import { styled } from 'nativewind'

interface Props {
  children: React.ReactNode
  className?: string
  style?: StyleProp<ViewStyle>
  handleLayout?: React.Dispatch<React.SetStateAction<number>>
}

const StyledScrollView = styled(NativeScrollView, {
  props: {
    contentContainerStyle: 'flex items-center',
  },
})

function ScrollView(props: Props) {
  const { children, className, style } = props

  const layout = (e: LayoutChangeEvent) => {
    props.handleLayout && props.handleLayout(e.nativeEvent.layout.width)
  }

  return (
    <StyledScrollView onLayout={layout} className={className} style={style}>
      {children}
    </StyledScrollView>
  )
}

export default ScrollView
