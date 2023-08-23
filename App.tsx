import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/types/navigator'
import { useFonts } from 'expo-font'

import HomeScreen from './src/screens/HomeScreen'
import ComponentLibraryScreen from './src/screens/ComponentLibraryScreen'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  useFonts({
    'Montserrat': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Light': require('./assets/fonts/Montserrat-Light.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'Comfortaa': require('./assets/fonts/Comfortaa-Regular.ttf'),
    'Comfortaa-Light': require('./assets/fonts/Comfortaa-Light.ttf'),
    'Comfortaa-Bold': require('./assets/fonts/Comfortaa-Bold.ttf'),
  })
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: HomeScreen.title }} />
        <Stack.Screen name="ComponentLibrary" component={ComponentLibraryScreen} options={{ title: ComponentLibraryScreen.title }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
