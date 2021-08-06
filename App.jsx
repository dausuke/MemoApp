import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, CardStyleInterpolators } from '@react-navigation/native-stack';
import firebase from 'firebase';

import MemoListScreen from './src/screens/MemoListScreens';
import MemoDitailScreen from './src/screens/MemoDitailScreens';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoCreatScreen from './src/screens/MemoCreatScreen';
import LogInScreen from './src/screens/LogInScreen';
import SignUpScreen from './src/screens/SignUpScreen';

import { firebaseConfig } from './env';

const Stack = createNativeStackNavigator();

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignUp"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#467FD3',
          },
          headerTitleStyle: {
            color: '#ffffff',
          },
          headerTitle: 'Memo App',
          headerTintColor: '#ffffff',
          headerBackTitle: 'Back',
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name="MemoList" component={MemoListScreen} />
        <Stack.Screen name="MemoDitail" component={MemoDitailScreen} />
        <Stack.Screen name="MemoEdit" component={MemoEditScreen} />
        <Stack.Screen name="MemoCreat" component={MemoCreatScreen} />
        <Stack.Screen
          name="LogIn"
          component={LogInScreen}
          // options={{
          //   cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          // }}
        />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
