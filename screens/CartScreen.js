import React, { useState} from "react";
import { connect } from 'react-redux';
import { View } from "react-native";
import { addOrder } from '../store/actions/cartAction';
import { Container, Header, Content, Card, CardItem, Text, Body, Button, Item, Label, Input } from "native-base";

const CartScreen = ({ order, addOrder }) => {

  const [address, changeAddress] = useState('');

  const addTo = total => ({
    dishId: order.map(el => el.id),
    restId: order[0].restId,
    userId: 'YuriiVovk',
    address: address,
    totalPrice: total,
  })

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
                console.log(order);
                sum += item.price;
                return(
                  <CardItem key={item.id} >
                    <Body style={{flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
                      <View style={{justifyContent: 'flex-start'}}>
                        <Text>{item.name}</Text>
                      </View>
                      <View>
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
          <Item stackedLabel>
            <Label>Вкажіть місце доставки доставки</Label>
            <Input 
              onChangeText={(text) => changeAddress(text)}
              value={address}
            />
          </Item>
        </View>
        <View>
          <Button 
            onPress={() => addOrder(addTo(sum))}
            bordered dark style={{flex: 1, justifyContent: 'center', alignSelf: 'center', marginTop: 10}}>
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
  }),
  { addOrder }
)(CartScreen);
