import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from '@/types/navigator'
import { PortalProvider } from '@gorhom/portal'

import HomeScreen from './src/screens/HomeScreen'
import ComponentLibraryScreen from './src/screens/ComponentLibraryScreen'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <PortalProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: HomeScreen.title }} />
          <Stack.Screen name="ComponentLibrary" component={ComponentLibraryScreen} options={{ title: ComponentLibraryScreen.title }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PortalProvider>
  )
}
