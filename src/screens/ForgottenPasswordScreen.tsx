/* eslint-disable indent */
import React, { useCallback, useState } from 'react'
import { View, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import AuthHeader from '@/components/headers/AuthHeader'
import StepSendEmail from '@/components/forgotPassword/StepSendEmail'
import StepSentEmail from '@/components/forgotPassword/StepSentEmail'
import StepUpdatePassword from '@/components/forgotPassword/StepUpdatePassword'
import StepResetConfirmation from '@/components/forgotPassword/StepResetConfirmation'
import { SetupProps } from '@/types/props'
import { ForgotPasswordSteps } from '@/types/forgotPassword'
import { useColours } from '@/hooks/useTailwind'

type Props = SetupProps<'ForgotPassword'>

function ForgottenPasswordScreen(props: Props) {
  const { navigation } = props

  const windowHeight = Dimensions.get('window').height
  const colours = useColours()

  const [emailAddress, setEmailAddress] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [step, setStep] = useState(0)

  const renderContent = useCallback(() => {
    switch (step) {
      case ForgotPasswordSteps.SEND_EMAIL:
        return (
          <StepSendEmail
            navigation={navigation}
            setEmailAddress={setEmailAddress}
            setStep={setStep}
            emailAddress={emailAddress}
            windowHeight={windowHeight}
          />
        )
      case ForgotPasswordSteps.SENT_EMAIL:
        return (
          <StepSentEmail
            navigation={navigation}
            setStep={setStep}
            windowHeight={windowHeight}
          />
        )
      case ForgotPasswordSteps.UPDATE_PASSWORD:
        return (
          <StepUpdatePassword
            navigation={navigation}
            setStep={setStep}
            windowHeight={windowHeight}
            newPassword={newPassword}
            setNewPassword={setNewPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
          />
        )
      case ForgotPasswordSteps.RESET_CONFIRMATION:
        return (
          <StepResetConfirmation
            navigation={navigation}
            windowHeight={windowHeight}
          />
        )
      default:
        return <></>
    }
  }, [step])

  return (
    <LinearGradient
      colors={[colours.watermelon, colours.helio]}
      start={{ x: 0, y: -1 }}
      className="w-full h-full px-5 pt-20 pb-12"
      style={{ flex: 1 }}
    >
      <View className="flex flex-col justify-between h-full items">
        <AuthHeader />

        <View className="flex flex-col items-center justify-center"></View>
        {renderContent()}
      </View>
    </LinearGradient>
  )
}

ForgottenPasswordScreen.title = 'Forgotten Password'
export default ForgottenPasswordScreen
