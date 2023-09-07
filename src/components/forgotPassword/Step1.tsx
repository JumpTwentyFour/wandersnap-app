import React from 'react'
import { View, Text } from 'react-native'
import TextInput from '@/components/inputs/TextInput'
import Button from '@/components/pressables/Button'
import { ButtonType, ButtonVariant } from '@/types/button'
import { Step1Props } from '@/types/forgotPassword'

function Step1(props: Step1Props) {
  const { navigation, setEmailAddress, setStep, emailAddress, windowHeight } =
    props

  return (
    <View
      className="flex flex-col gap-5"
      style={{ height: windowHeight * 0.5 }}
    >
      <Text className="text-3xl font-comfortaa text-ghost">Reset Password</Text>
      <View>
        <TextInput
          onChangeText={(text) => setEmailAddress(text)}
          value={emailAddress}
          placeholder="Email Address"
        />
      </View>
      <View className="flex flex-col self-stretch justify-between pt-5">
        <View className="w-full mb-12">
          <Button
            onPress={() => setStep(1)}
            variant={ButtonVariant.Secondary}
            type={ButtonType.Solid}
            label="Send reset email"
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

export default Step1
