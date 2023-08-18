import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './src/screens/HomeScreen'
import ComponentLibraryScreen from './src/screens/ComponentLibraryScreen'

export type RootStackParamList = {
  Home: undefined;
  ComponentLibrary: undefined;
}

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: HomeScreen.title }} />
        <Stack.Screen name="ComponentLibrary" component={ComponentLibraryScreen} options={{ title: ComponentLibraryScreen.title }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
