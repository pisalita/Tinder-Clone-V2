import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import useAuth from './hooks/useAuth';
import MatchedScreen from './Screens/MatchedScreen';
import ChatScreen from './Screens/ChatScreen';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import ModalScreen from './Screens/ModalScreen';
import MessageScreen from './Screens/MessageScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {

  const { user } = useAuth();

  return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
      }}
    >
      {user ? (
        <React.Fragment> 
          <Stack.Group>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Chat" component={ChatScreen} />
            <Stack.Screen name="Message" component={MessageScreen} />
          </Stack.Group>
          <Stack.Group screenOptions={{ presentation: "modal" }}>
            <Stack.Screen name="Modal" component={ModalScreen} />
          </Stack.Group>
          <Stack.Group screenOptions={{ presentation: "transparentModal" }}>
            <Stack.Screen name="Match" component={MatchedScreen} />
          </Stack.Group>
        </React.Fragment>
      ): (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>  
  )
}

export default StackNavigator
