import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "./Auth/SignInScreen";
import SignUpScreen from "./Auth/SignUpScreen";
import nhost from '../helpers';
import { NhostReactProvider, useAuthenticationStatus } from '@nhost/react';

const Stack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <NhostReactProvider nhost={nhost}>
    <Stack.Navigator>
      <Stack.Screen
        name="Sign in"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Sign up" component={SignUpScreen} />
    </Stack.Navigator>
    </NhostReactProvider>
  );
};

export default AuthStackNavigator;
