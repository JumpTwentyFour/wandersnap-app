import React from 'react'
import { ScrollView as NativeScrollView } from 'react-native'
import { styled } from 'nativewind'

interface Props {
  children: React.ReactNode
  className?: string
}

const StyledScrollView = styled(NativeScrollView, {
  props: {
    contentContainerStyle: 'flex items-center',
  },
})

function ScrollView(props: Props) {
  const { children, className } = props

  return (
    <StyledScrollView className={className}>
      {children}
    </StyledScrollView>
  )
}

export default ScrollView
