import React from 'react'
import { Text, View } from 'react-native'
import Counter from '../components/Counter'

function HomeScreen() {
  return (
    <View className="flex items-center justify-center h-screen">
      <Text className='w-1/2 text-center mb-6'>Hello, I am an example screen using a component!</Text>
      <Counter />
    </View>
  )
}

HomeScreen.title = 'Home'

export default HomeScreen
