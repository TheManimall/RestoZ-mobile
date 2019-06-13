import React, { Component } from "react";
import { Text } from "react-native";

import DishItem from "../components/DishItem";
import { getDish } from "../store/actions/dishActions";
import { connect } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";
import {addToCart} from "../store/actions/cartAction";

class RestDishScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getDish, navigation } = this.props;
    const restId = navigation.getParam('restId', 'no-id');

    console.log('asdasdasd', restId);

    getDish(restId);
  }

  render() {
    const { dish, loaded, navigation, addToCart } = this.props;

    const restId = navigation.getParam('restId', 'no-id');
    return (
      <ScrollView style={{marginBottom: 20}}>
        {loaded && dish.map(item => (
          <DishItem
            name={item.name}
            img={item.imgUrl}
            type={item.type}
            key={item._id}
            id={item._id}
            price={item.price}
            weight={item.weight}
            restId={restId}
            addToCart={addToCart}
            ingredients={item.ingredients}
          />
        ))}
      </ScrollView>
    );
  }
}

// const mapDispatchToProps = {
//   getDish,
//   addToCart
// };

const mapDispatchToProps = dispatch => ({
  getDish: id => dispatch(getDish(id)),
  addToCart: values => dispatch(addToCart(values))
});

export default connect(
  state => ({
    dish: state.dish.restDish,
    loaded: state.dish.loaded,
  }),
  mapDispatchToProps
)(RestDishScreen);
