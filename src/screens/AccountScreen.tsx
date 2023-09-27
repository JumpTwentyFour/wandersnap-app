import DashboardHeader from '@/components/headers/DashboardHeader'
import useAuthStore from '@/stores/auth'
import { SetupProps } from '@/types/props'
import React, { useMemo, useState } from 'react'
import {
  LayoutChangeEvent,
  Pressable,
  View,
  Text,
  Dimensions,
} from 'react-native'

type Props = SetupProps<'Account'>

function AccountScreen(props: Props) {
  const { navigation } = props
  const { height } = Dimensions.get('window')
  const [headerHeight, setHeaderHeight] = useState(0)

  const auth = useAuthStore()

  function handleSetHeaderHeight(e: LayoutChangeEvent) {
    setHeaderHeight(e.nativeEvent.layout.height)
  }

  const contentViewStyles = useMemo(() => {
    return {
      height: height - headerHeight,
      flex: 1,
    }
  }, [headerHeight])

  return (
    <View style={{ flex: 1 }} className="relative w-full h-screen bg-tuatura">
      <View
        onLayout={(e) => handleSetHeaderHeight(e)}
        className="flex flex-row items-center justify-between px-5 pt-16"
      >
        <DashboardHeader>My Account</DashboardHeader>
      </View>
      <View
        style={contentViewStyles}
        className="flex items-center justify-center"
      >
        <Pressable
          onPress={() => navigation.goBack()}
          className="px-4 py-2 my-3 bg-green-400 rounded-md shadow drop-shadow"
        >
          <Text className="text-ghost">Go Back</Text>
        </Pressable>
        <Pressable
          onPress={() => auth.logout()}
          className="px-4 py-2 my-3 bg-green-400 rounded-md shadow drop-shadow"
        >
          <Text className="text-ghost">Logout</Text>
        </Pressable>
      </View>
    </View>
  )
}

AccountScreen.title = 'Account'
export default AccountScreen
