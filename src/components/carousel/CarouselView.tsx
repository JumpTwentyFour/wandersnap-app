import React from 'react'
import { View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

interface Props {
  value: number
  onChange: (value: number) => void
  children: React.ReactNode
}

function CarouselView(props: Props) {
  const { value, children } = props

  return <>{React.Children.toArray(children)[value]}</>
}

function CarouselViewItem(props: { [key: string]: unknown }) {
  return (
    <LinearGradient
      colors={['#FF6978', '#7E5BFF']}
      locations={[0, 0.48]}
      className="w-full h-[470px] rounded-xl p-3"
      style={{ flex: 1 }}
    >
      <View {...props} />
    </LinearGradient>
  )
}

CarouselView.Item = CarouselViewItem
export default CarouselView
