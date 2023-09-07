import React from 'react'
import { View, Text } from 'react-native'
import Button from '../pressables/Button'
import { ButtonType, ButtonVariant } from '@/types/button'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/types/navigator'

interface Step4Props {
  windowHeight: number
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'ForgotPassword',
    undefined
  >
}

function Step4(props: Step4Props) {
  const { windowHeight, navigation } = props
  return (
    <View
      className="flex flex-col gap-5"
      style={{ height: windowHeight * 0.5 }}
    >
      <Text className="text-3xl font-comfortaa text-ghost">Reset Password</Text>
      <View>
        <Text className="text-base font-mont-light text-ghost">
          Your password has been successfully updated. You can now log in to
          your account.
        </Text>
      </View>
      <View className="flex flex-col self-stretch justify-between pt-5">
        <View className="w-full mb-12">
          <Button
            onPress={() => navigation.navigate('Login')}
            variant={ButtonVariant.Secondary}
            type={ButtonType.Solid}
            label="Log in"
          />
        </View>
      </View>
    </View>
  )
}

export default Step4
