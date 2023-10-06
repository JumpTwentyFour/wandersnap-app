import React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import IconButton from '@/components/pressables/IconButton'
import { IconSize } from '@/types/icon'

type TripHeaderProps = {
  handleNavigateBack?: () => void
  handleMenu?: () => void
  menuOpen?: boolean
}

function TripHeader(props: TripHeaderProps) {
  const { handleNavigateBack, handleMenu, menuOpen = false } = props
  const navigation = useNavigation()

  return (
    <View className="flex flex-row items-start self-stretch justify-between px-5 py-3">
      <IconButton
        size={IconSize.Small}
        icon="ChevronLeftIcon"
        colour="#7E5BFF"
        bgClass="bg-gray-50"
        onPress={() =>
          handleNavigateBack ? handleNavigateBack() : navigation.goBack()
        }
      />
      <IconButton
        size={IconSize.Small}
        icon={!menuOpen ? 'EllipsisIcon' : 'XMarkIcon'}
        colour="#7E5BFF"
        bgClass="bg-gray-50"
        onPress={() => (handleMenu ? handleMenu() : console.log('Open Menu'))}
      />
    </View>
  )
}

export default TripHeader
