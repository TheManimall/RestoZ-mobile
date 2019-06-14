import React, { Component } from "react";
import { Image, View } from "react-native";
import {
  H2,
  H3,
  Card,
  CardItem,
  Text,
  Button,
  Left,
  Body,
  Right
} from "native-base";

class DishItem extends Component {
  render() {
    const { name, img, price, weight, ingredients, type, restId, addToCart, id } = this.props;
    return (
      <Card style={{marginBottom: 20}}>
        <CardItem>
          <Left>
            <Body>
              <H2>{name}</H2>
              <Text note>{type}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{
              uri: `${img}`
            }}
            style={{ height: 150, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Left>
            <Text>ціна</Text>
          </Left>
          <Body />
          <Right>
            <Text>
              <H3>{price}</H3>грн
            </Text>
          </Right>
        </CardItem>
        <CardItem>
          <Left>
            <Text>вага</Text>
          </Left>
          <Body style={{ justifyContent: "center" }}></Body>
          <Right>
            <Text>
              <H3>{weight}</H3>г
            </Text>
          </Right>
        </CardItem>
        <CardItem>
          <Left>
            {ingredients.map(el => (
              <View
                key={el}
                style={{
                  padding: 10,
                  alignItems: "center",
                  margin: 5,
                  backgroundColor: "#e3e3e3",
                  color: "#fff"
                }}
              >
                <Text>{el}</Text>
              </View>
            ))}
          </Left>
          <Body />
          <Right />
        </CardItem>
        <CardItem>
          <Left>
            <Button bordered primary onPress={() =>
              addToCart({
                name,
                price,
                id,
                restId

            })}>
              <Text>Замовити</Text>
            </Button>
          </Left>
        </CardItem>
      </Card>
    );
  }
}

export default DishItem;
