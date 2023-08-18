import React, { useState } from 'react'
import { Text, Pressable, View } from 'react-native'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <View className='w-full flex items-center mt-2'>
      <Text>You clicked {count} times</Text>
      <Pressable
        onPress={() => setCount(count + 1)}
        className='bg-green-400 py-2 px-4 rounded-md shadow drop-shadow mt-3'
      >
        <Text className='text-white'>Click me!</Text>
      </Pressable>
    </View>
  )
}

export default Counter
