import { SetupProps } from '@/types/props'
import React from 'react'
import { View, Text } from 'react-native'

type Props = SetupProps<'TripCreate'>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function TripCreateScreen(props: Props) {
  return (
    <View
      style={{ flex: 1 }}
      className="flex items-center w-full h-screen p-6 jusify-center"
    >
      <Text>Create Trip</Text>
    </View>
  )
}

TripCreateScreen.title = 'Create Trip'
export default TripCreateScreen
