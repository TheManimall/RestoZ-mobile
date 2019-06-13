import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import RestDishScreen from "../screens/RestDishScreen";
import HomeScreen from '../screens/HomeScreen';

const RestaurantNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  RestDish: {
    screen: RestDishScreen
  }
});

export default createAppContainer(RestaurantNavigator);