import React from 'react'
import { Text, View, Pressable } from 'react-native'
import { SetupProps } from '@/types/props'

type Props = SetupProps<'Home'>

function HomeScreen({ navigation }: Props) {
  return (
    <View className="flex items-center justify-center h-screen">
      <Text className='w-1/2 text-center mb-6'>Hello, I am an example screen using a component!</Text>

      <Pressable
        onPress={() => navigation.navigate('ComponentLibrary')}
        className='bg-green-400 py-2 px-4 rounded-md shadow drop-shadow my-3'
      >
        <Text className='text-white'>Go to component library</Text>
      </Pressable>
    </View>
  )
}

HomeScreen.title = 'Home'

export default HomeScreen
