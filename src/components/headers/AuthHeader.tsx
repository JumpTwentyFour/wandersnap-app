import React from 'react'
import { View } from 'react-native'
import AuthLogo from '@/assets/logo/authLogo.svg'

const AuthHeader = () => {
  return (
    <View className="flex items-center justify-center py-2">
      <AuthLogo />
    </View>
  )
}

export default AuthHeader
