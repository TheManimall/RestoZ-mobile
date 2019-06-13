import React, { Component } from "react";
import { Text } from "react-native";

import DishItem from "../components/DishItem";
import { getAllDish } from "../store/actions/dishActions";
import { connect } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";

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
    const { dish, loaded } = this.props;
    return (
      <ScrollView>
        {loaded && dish.map(item => (
          <DishItem
            name={item.name}
            img={item.imgUrl}
            key={item._id}
            id={item._id}
            price={item.price}
            weight={item.weight}
            ingredients={item.ingredients}
          />
        ))}
      </ScrollView>
    );
  }
}

const mapDispatchToProps = {
  getAllDish
};

export default connect(
  state => ({
    dish: state.dish.dish,
    loaded: state.dish.loaded,
  }),
  mapDispatchToProps
)(DishScreen);
