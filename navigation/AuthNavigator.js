import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import SignInScreen2 from '../screens/SignInScreen2';
import SignUpScreen2 from '../screens/SignUpScreen2';

const AuthNavigator = createStackNavigator({
  SignIn: {
    screen: SignInScreen2
  },
  SignUp: {
    screen: SignUpScreen2
  }
});

export default createAppContainer(AuthNavigator);