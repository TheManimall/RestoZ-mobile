import React, { Component } from "react";
import { Text, View } from "react-native";

import DishItem from "../components/DishItem";
import {getAllDish, getDish} from "../store/actions/dishActions";
import { connect } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";
import {Header} from "native-base";
import {addToCart} from "../store/actions/cartAction";

class DishScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getAllDish } = this.props;

    getAllDish();
  }

  render() {
    const { dish, loaded, addToCart } = this.props;
    return (
      <View>
        <Header style={{height: 15}} />
        <ScrollView>
          <Text style={{fontSize: 25, margin: 20}}>Страви</Text>
          {loaded && dish.map(item => (
            <DishItem
              name={item.name}
              img={item.imgUrl}
              key={item._id}
              id={item._id}
              price={item.price}
              addToCart={addToCart}
              weight={item.weight}
              ingredients={item.ingredients}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getAllDish: () => dispatch(getAllDish()),
  addToCart: values => dispatch(addToCart(values))
});

export default connect(
  state => ({
    dish: state.dish.dish,
    loaded: state.dish.loaded,
  }),
  mapDispatchToProps
)(DishScreen);
