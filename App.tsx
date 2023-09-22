import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFonts } from 'expo-font'
import { RootStackParamList } from '@/types/navigator'
import { PortalProvider } from '@gorhom/portal'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import HomeScreen from './src/screens/HomeScreen'
import LoginScreen from './src/screens/LoginScreen'
import CreateAccountScreen from './src/screens/CreateAccountScreen'
import OnboardingScreen from './src/screens/OnboardingScreen'
import ImageScreen from './src/screens/ImageScreen'
import ForgottenPassword from './src/screens/ForgottenPasswordScreen'
import ComponentLibraryScreen from './src/screens/ComponentLibraryScreen'
import TripScreen from './src/screens/TripScreen'

import useOverlayStore from '@/stores/overlay'
import useAuthStore from '@/stores/auth'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  const overlay = useOverlayStore()
  const auth = useAuthStore()

  const [loaded] = useFonts({
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
    'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'Comfortaa-Regular': require('./assets/fonts/Comfortaa-Regular.ttf'),
    'Comfortaa-Light': require('./assets/fonts/Comfortaa-Light.ttf'),
    'Comfortaa-Bold': require('./assets/fonts/Comfortaa-Bold.ttf'),
  })

  const authed = auth.authenticated && loaded

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar hidden={!overlay.showStatusBar} animated />
      <PortalProvider>
        <NavigationContainer>
          {!authed && loaded && (
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: HomeScreen.title, headerShown: false }}
              />
              <Stack.Screen
                name="Trip"
                component={TripScreen}
                options={{ title: TripScreen.title, headerShown: false }}
              />
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ title: LoginScreen.title, headerShown: false }}
              />
              <Stack.Screen
                name="ForgotPassword"
                component={ForgottenPassword}
                options={{ title: ForgottenPassword.title, headerShown: false }}
              />
              <Stack.Screen
                name="CreateAccount"
                component={CreateAccountScreen}
                options={{
                  title: CreateAccountScreen.title,
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Onboarding"
                component={OnboardingScreen}
                options={{
                  title: OnboardingScreen.title,
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Image"
                component={ImageScreen}
                options={{
                  title: ImageScreen.title,
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="ComponentLibrary"
                component={ComponentLibraryScreen}
                options={{ title: ComponentLibraryScreen.title }}
              />
            </Stack.Navigator>
          )}
        </NavigationContainer>
      </PortalProvider>
    </GestureHandlerRootView>
  )
}
