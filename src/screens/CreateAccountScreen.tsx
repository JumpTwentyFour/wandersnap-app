import React from 'react'
import { Dimensions, View, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import AuthHeader from '@/components/headers/AuthHeader'
import Button from '@/components/pressables/Button'
import TextInput from '@/components/inputs/TextInput'
import { ButtonType, ButtonVariant } from '@/types/button'
import { SetupProps } from '@/types/props'

type Props = SetupProps<'CreateAccount'>

function CreateAccountScreen(props: Props) {
  const { navigation } = props

  const windowHeight = Dimensions.get('window').height

  return (
    <LinearGradient
      colors={['#AE60CC', '#7E5BFF']}
      locations={[0, 0.6]}
      className="w-full h-full px-5 pt-20 pb-12"
      style={{ flex: 1 }}
    >
      <View className="flex flex-col justify-between h-full items">
        <AuthHeader />
        <View className="flex flex-col items-center justify-centser"></View>
        <View
          className="flex flex-col gap-5"
          style={{ height: windowHeight * 0.5 }}
        >
          <Text className="text-3xl font-comfortaa text-ghost">
            Create new account
          </Text>
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
                label="Create account"
              />
            </View>
          </View>
          <View className="absolute bottom-0 left-0 w-full pr-5">
            <Button
              onPress={() => navigation.navigate('Login')}
              variant={ButtonVariant.Secondary}
              type={ButtonType.Outline}
              label="Login"
            />
          </View>
        </View>
      </View>
    </LinearGradient>
  )
}

CreateAccountScreen.title = 'Create new account'
export default CreateAccountScreen
