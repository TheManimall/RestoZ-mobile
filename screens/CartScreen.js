import React from "react";
import { connect } from 'react-redux';
import { View } from "react-native";
import { Container, Header, Content, Card, CardItem, Text, Body, Button } from "native-base";

const CartScreen = ({ order }) => {
  let sum = 0;
  return(
    <Container>
      <Header />
      <Content padder>
        <Card>
          <CardItem header bordered>
            <Text>Корзина</Text>
          </CardItem>
              {order && order.map(item => {
                sum += item.price;
                return(
                  <CardItem key={item.id} >
                    <Body style={{flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
                      <View style={{justifyContent: 'flex-start'}}>
                        <Text>{item.name}</Text>
                      </View>
                      <View style={{justifyContent: 'flex-end'}}>
                        <Text>{item.price}</Text>
                      </View>
                    </Body>
                  </CardItem>
                )
              })}
          <CardItem footer bordered>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
              <Text>Загальна сума:</Text>
              <Text>{sum}</Text>
            </View>
          </CardItem>
        </Card>
        <View>
          <Button bordered dark style={{flex: 1, justifyContent: 'center', alignSelf: 'center', marginTop: 10}}>
            <Text>Оформити замовлення</Text>
          </Button>
        </View>
      </Content>
    </Container>
  )
};

export default connect(
  state=>({
    order: state.cart.order
  })
)(CartScreen);
