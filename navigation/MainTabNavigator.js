import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';
import { Ionicons } from "@expo/vector-icons";

import RestaurantNavigator from './RestaurantNavigator';
// import HomeScreen from '../screens/HomeScreen';
import DishScreen from '../screens/DishScreen'
import CartScreen from '../screens/CartScreen'


const TabNavigations = createBottomTabNavigator({
  Restaurant: {
    screen: RestaurantNavigator,
    navigationOptions: {
      tabBarLabel: "Заклади",
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-restaurant" size={24} />
      )
    }
  },
  Dish: {
    screen: DishScreen,
    navigationOptions: {
      tabBarLabel: "Страви",
      tabBarIcon: ({ tintColor }) => <Ionicons name="md-pizza" size={24} />
    }
  },
  Cart: {
    screen: CartScreen,
    navigationOptions: {
      tabBarLabel: "Корзина",
      tabBarIcon: ({ tintColor }) => <Ionicons name="ios-cart" size={24} />
    }
  }
});

export default createAppContainer(TabNavigations);


