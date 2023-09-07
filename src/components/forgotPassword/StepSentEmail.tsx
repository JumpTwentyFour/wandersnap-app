import React from 'react'
import { View, Text } from 'react-native'
import Button from '@/components/pressables/Button'
import { ButtonType, ButtonVariant } from '@/types/button'
import { ForgotPasswordSteps, StepSentEmailProps } from '@/types/forgotPassword'

function StepSentEmail(props: StepSentEmailProps) {
  const { navigation, windowHeight, setStep } = props
  return (
    <View
      className="flex flex-col gap-5"
      style={{ height: windowHeight * 0.5 }}
    >
      <Text className="text-3xl font-comfortaa text-ghost">
        Reset password email sent
      </Text>
      <View>
        <Text className="text-base font-mont-light text-ghost">
          Please check your email and follow the link to reset your password.
        </Text>
      </View>
      <View className="flex flex-col self-stretch justify-between pt-5">
        <View className="w-full mb-12">
          <Button
            onPress={() => setStep(ForgotPasswordSteps.UPDATE_PASSWORD)}
            variant={ButtonVariant.Secondary}
            type={ButtonType.Solid}
            label="Resend reset email"
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

export default StepSentEmail
