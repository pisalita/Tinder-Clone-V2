import React from 'react';
import StackNavigator from './StackNavigator';
import { LogBox } from "react-native";
LogBox.ignoreAllLogs(); // ignore log notification by message
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './hooks/useAuth';


export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}