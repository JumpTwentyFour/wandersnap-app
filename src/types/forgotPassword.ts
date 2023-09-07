import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/types/navigator'

type Navigator = NativeStackNavigationProp<
  RootStackParamList,
  'ForgotPassword',
  undefined
>

export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
}

export enum ForgotPasswordSteps {
  SEND_EMAIL = 0,
  SENT_EMAIL = 1,
  UPDATE_PASSWORD = 2,
  RESET_CONFIRMATION = 3,
}

export interface StepSendEmailProps {
  navigation: Navigator
  setEmailAddress: React.Dispatch<React.SetStateAction<string>>
  setStep: React.Dispatch<React.SetStateAction<number>>
  emailAddress: string
  windowHeight: number
}

export interface StepSentEmailProps {
  navigation: Navigator
  setStep: React.Dispatch<React.SetStateAction<number>>
  windowHeight: number
}

export interface StepUpdatePasswordProps {
  navigation: Navigator
  setNewPassword: React.Dispatch<React.SetStateAction<string>>
  newPassword: string
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>
  setStep: React.Dispatch<React.SetStateAction<number>>
  confirmPassword: string
  windowHeight: number
}

export interface StepResetConfirmationProps {
  windowHeight: number
  navigation: Navigator
}
