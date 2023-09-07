import React from 'react'
import { Text, View, Pressable } from 'react-native'
import { SetupProps } from '@/types/props'

type Props = SetupProps<'Home'>

function HomeScreen({ navigation }: Props) {
  return (
    <View className="flex items-center justify-center h-screen">
      <Text className="w-1/2 mb-6 text-center">
        Hello, I am an example screen using a component!
      </Text>

      <Pressable
        onPress={() => navigation.navigate('Login')}
        className="px-4 py-2 my-3 bg-green-400 rounded-md shadow drop-shadow"
      >
        <Text className="text-ghost">Go to Login</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('ComponentLibrary')}
        className="px-4 py-2 my-3 bg-green-400 rounded-md shadow drop-shadow"
      >
        <Text className="text-ghost">Go to component library</Text>
      </Pressable>
    </View>
  )
}

HomeScreen.title = 'Home'

export default HomeScreen
