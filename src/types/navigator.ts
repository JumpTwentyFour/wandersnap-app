import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type RootStackParamList = {
  Login: undefined
  ForgotPassword: undefined
  Home: undefined
  ComponentLibrary: undefined
  CreateAccount: undefined
}

export type Navigator = NativeStackNavigationProp<
  RootStackParamList,
  'ForgotPassword',
  undefined
>
