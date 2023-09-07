import React from 'react'
import { View, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import AuthHeader from '@/components/headers/AuthHeader'
import { SetupProps } from '@/types/props'
import Step1 from '@/components/forgotPassword/Step1'
import Step2 from '@/components/forgotPassword/Step2'
import Step3 from '@/components/forgotPassword/Step3'
import Step4 from '@/components/forgotPassword/Step4'

type Props = SetupProps<'ForgotPassword'>

function ForgottenPasswordScreen(props: Props) {
  const { navigation } = props

  const windowHeight = Dimensions.get('window').height

  const [emailAddress, setEmailAddress] = React.useState('')
  const [newPassword, setNewPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')

  const [step, setStep] = React.useState(0)

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

        {step === 0 ? (
          <Step1
            navigation={navigation}
            setEmailAddress={setEmailAddress}
            setStep={setStep}
            emailAddress={emailAddress}
            windowHeight={windowHeight}
          />
        ) : step === 1 ? (
          <Step2
            navigation={navigation}
            setStep={setStep}
            windowHeight={windowHeight}
          />
        ) : step === 2 ? (
          <Step3
            navigation={navigation}
            setStep={setStep}
            windowHeight={windowHeight}
            newPassword={newPassword}
            setNewPassword={setNewPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
          />
        ) : (
          <Step4 navigation={navigation} windowHeight={windowHeight} />
        )}
      </View>
    </LinearGradient>
  )
}
ForgottenPasswordScreen.title = 'Forgotten Password'
export default ForgottenPasswordScreen
