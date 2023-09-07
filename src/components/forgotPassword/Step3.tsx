import React from 'react'
import { View, Text } from 'react-native'
import TextInput from '@/components/inputs/TextInput'
import Button from '@/components/pressables/Button'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/types/navigator'
import { ButtonType, ButtonVariant } from '@/types/button'

interface Step3Props {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'ForgotPassword',
    undefined
  >
  setNewPassword: React.Dispatch<React.SetStateAction<string>>
  newPassword: string
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>
  setStep: React.Dispatch<React.SetStateAction<number>>
  confirmPassword: string
  windowHeight: number
}

function Step3(props: Step3Props) {
  const {
    navigation,
    setNewPassword,
    newPassword,
    setConfirmPassword,
    confirmPassword,
    windowHeight,
    setStep,
  } = props
  return (
    <View
      className="flex flex-col gap-5"
      style={{ height: windowHeight * 0.5 }}
    >
      <Text className="text-3xl font-comfortaa text-ghost">Reset Password</Text>
      <View>
        <TextInput
          onChangeText={(text) => setNewPassword(text)}
          type="password"
          value={newPassword}
          placeholder="New password"
        />
      </View>
      <View>
        <TextInput
          onChangeText={(text) => setConfirmPassword(text)}
          type="password"
          value={confirmPassword}
          placeholder="Confirm password"
        />
      </View>
      <View className="flex flex-col self-stretch justify-between pt-5">
        <View className="w-full mb-12">
          <Button
            onPress={() => setStep(3)}
            variant={ButtonVariant.Secondary}
            type={ButtonType.Solid}
            label="Reset password"
          />
        </View>
      </View>
      <View className="absolute bottom-0 left-0 w-full pr-5">
        <Button
          onPress={() => navigation.navigate('Login')}
          variant={ButtonVariant.Secondary}
          type={ButtonType.Outline}
          label="Back to login"
        />
      </View>
    </View>
  )
}

export default Step3
