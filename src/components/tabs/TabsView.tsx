import React from 'react'
import { View } from 'react-native'

interface Props {
  value: number
  onChange: (value: number) => void
  children: React.ReactNode
}

function TabsView(props: Props) {
  const { value, children } = props

  return <>{React.Children.toArray(children)[value]}</>
}

function TabsViewItem(props: { [key: string]: unknown }) {
  return <View {...props} />
}

TabsView.Item = TabsViewItem
export default TabsView
