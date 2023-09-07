import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/types/navigator'

export interface Step1Props {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'ForgotPassword',
    undefined
  >
  setEmailAddress: React.Dispatch<React.SetStateAction<string>>
  setStep: React.Dispatch<React.SetStateAction<number>>
  emailAddress: string
  windowHeight: number
}

export interface Step2Props {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'ForgotPassword',
    undefined
  >
  setStep: React.Dispatch<React.SetStateAction<number>>
  windowHeight: number
}

export interface Step3Props {
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

export interface Step4Props {
  windowHeight: number
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'ForgotPassword',
    undefined
  >
}
