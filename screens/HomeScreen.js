import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  ScrollView,
  View,
  Text,
} from 'react-native';
import { Header, Body } from 'native-base';

import { getAllRestaurant } from "../store/actions/restaurantActions";
import RestaurantItem from '../components/RestaurantItem';

const HomeScreen = ({ getAllRestaurant, rest, loaded, navigation }) => {

  useEffect(() => {
    getAllRestaurant();
  }, []);

  return(
    <View>
      <Header style={{height: 15}} />
      <ScrollView>
        <Text style={{fontSize: 25, margin: 20}}>Заклади</Text>
        {loaded && rest.map(item => (
          <RestaurantItem
            navigation={navigation}
            name={item.name}
            key={item._id}
            type={item.type}
            imgUrl={item.imgUrl}
            restId={item._id}
          />
        ))}
      </ScrollView>
    </View>
  );
};

HomeScreen.navigationOptions = {
  header: null,
};

const mapStateToProps = state => ({
  rest: state.restaurant.rest,
  loaded: state.restaurant.loaded,
});

const mapDispatchToProps = {
  getAllRestaurant
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

