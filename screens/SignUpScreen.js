import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Form,
  Left,
  Right,
  Body,
  Title,
  Icon,
  Item,
  Label,
  Input
} from "native-base";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Реєстрація</Title>
          </Body>
          <Right />
        </Header>
        <Content contentContainerStyle={{ justifyContent: "center", flex: 1 }}>
          <Form>
            <View style={styles.form}>
              <Item stackedLabel>
                <Label>Логін:</Label>
                <Input />
              </Item>
              <Item stackedLabel>
                <Label>email:</Label>
                <Input />
              </Item>
              <Item stackedLabel>
                <Label>Пароль:</Label>
                <Input />
              </Item>
              <Item stackedLabel>
                <Label>Повторіть пароль:</Label>
                <Input />
              </Item>
              <Button style={styles.button} block danger>
                <Text>Реєстрація</Text>
              </Button>
              <Button style={styles.button} block primary>
                <Text>Вхід</Text>
              </Button>
            </View>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    margin: 20
  }
});

export default SignUp;
