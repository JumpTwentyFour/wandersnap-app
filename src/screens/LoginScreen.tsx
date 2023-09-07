import AuthHeader from '@/components/headers/AuthHeader'
import TextInput from '@/components/inputs/TextInput'
import Button from '@/components/pressables/Button'
import { ButtonType, ButtonVariant } from '@/types/button'
import { SetupProps } from '@/types/props'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { View, Text } from 'react-native'

type Props = SetupProps<'Login'>

function LoginScreen(props: Props) {
  const { navigation } = props

  console.log(navigation)

  return (
    <LinearGradient
      colors={['#FF6978', '#7E5BFF']}
      locations={[0, 0.28]}
      className="w-full h-full px-5 pt-20 pb-12"
      style={{ flex: 1 }}
    >
      <View className="flex flex-col justify-between h-full items">
        <AuthHeader />
        <View className="flex flex-col items-center justify-center"></View>
        <View className="flex flex-col gap-5 h-[400px]">
          <Text className="text-3xl font-comfortaa text-ghost">Log In</Text>
          <View>
            <TextInput placeholder="Email Address" />
          </View>
          <View>
            <TextInput placeholder="Password" type="password" />
          </View>
          <View className="flex flex-col self-stretch justify-between pt-5">
            <View className="w-full mb-12">
              <Button
                variant={ButtonVariant.Secondary}
                type={ButtonType.Solid}
                label="Log in"
              />
              <Button
                variant={ButtonVariant.Secondary}
                label="Forgotten password?"
              />
            </View>
            <View className="flex flex-col justify-end w-full">
              <Button
                variant={ButtonVariant.Secondary}
                type={ButtonType.Outline}
                label="Create new account"
              />
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  )
}

LoginScreen.title = 'Login'
export default LoginScreen
