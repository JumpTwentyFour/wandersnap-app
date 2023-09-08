import React from 'react'
import { View, Text } from 'react-native'
import TextInput from '@/components/inputs/TextInput'
import Button from '@/components/pressables/Button'
import { ButtonType, ButtonVariant } from '@/types/button'
import {
  ForgotPasswordSteps,
  StepUpdatePasswordProps,
} from '@/types/forgotPassword'

function StepUpdatePassword(props: StepUpdatePasswordProps) {
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
            onPress={() => setStep(ForgotPasswordSteps.RESET_CONFIRMATION)}
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

export default StepUpdatePassword
