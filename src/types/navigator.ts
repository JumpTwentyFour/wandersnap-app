import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ImageSourcePropType } from 'react-native'

export type RootStackParamList = {
  Login: undefined
  ForgotPassword: undefined
  Home: undefined
  ComponentLibrary: undefined
  CreateAccount: undefined
  Onboarding: undefined
  Trip: undefined
  Image: { image: ImageSourcePropType; location: string }
}

export type Navigator = NativeStackNavigationProp<
  RootStackParamList,
  'ForgotPassword',
  undefined
>
