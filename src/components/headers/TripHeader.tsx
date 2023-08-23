import React from 'react'
import { View } from 'react-native'
import IconButton from '../pressables/IconButton'
import { IconSize } from '@/types/icon'
import { useNavigation } from '@react-navigation/native'

const TripHeader = () => {

  const navigation = useNavigation()
    
  return (
    <View className="flex flex-row items-start self-stretch justify-between px-5 py-3">
      <IconButton size={IconSize.Small} icon='ChevronLeftIcon' colour='#7E5BFF' bgClass='bg-gray-50' onPress={() => navigation.goBack()}/>
      <IconButton size={IconSize.Small} icon='EllipsisIcon' colour='#7E5BFF' bgClass='bg-gray-50' onPress={() => console.log('Open Menu')}/>
    </View>
  )
}

export default TripHeader