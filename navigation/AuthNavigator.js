import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import SignInScreen from '../screens/SignInScreen2';
import SignUpScreen from '../screens/SignUpScreen';

const AuthNavigator = createStackNavigator({
  SignIn: {
    screen: SignInScreen
  },
  SignUp: {
    screen: SignUpScreen
  }
});

export default createAppContainer(AuthNavigator);