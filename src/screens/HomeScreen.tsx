import React from 'react'
import { Text, View, Pressable } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { RootStackParamList } from '../../App'
import Counter from '../components/Counter'

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

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

      <Counter />
    </View>
  )
}

HomeScreen.title = 'Home'

export default HomeScreen
