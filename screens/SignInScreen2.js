import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from 'react-redux';
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
import TextField from "../components/TextField";
import { signIn } from "../store/actions/authActions";
import { required, email } from './validations';

class SignInScreen2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _handleSubmit = values => {
    const { handleSubmit, SignIn, navigation: { navigate } } = this.props;

    return 
      handleSubmit(SignIn(values));
      console.log('asd');
      navigate("Home");
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Вхід</Title>
          </Body>
          <Right />
        </Header>
        <Content contentContainerStyle={{ justifyContent: "center", flex: 1 }}>
          <Form onSubmit={this._handleSubmit}>
            <Field
              name="email"
              type="email"
              label="email"
              component={TextField}
              validate={[ required, email ]}
            />
            <Field
              name="password"
              type="password"
              label="пароль"
              component={TextField}
              validate={[ required ]}
            />
            <Button
              style={styles.button}
              onPress={() => navigate("Home")}
              block
              primary
            >
              <Text>Вхід</Text>
            </Button>
            <Button
              style={styles.button}
              onPress={() => navigate("SignUp")}
              block
              danger
            >
              <Text>Реєстрація</Text>
            </Button>
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

const mapDispatchToProps = {
  signIn,
};

export default connect(null, mapDispatchToProps)(reduxForm({
  form: 'SignIn',
})(SignInScreen2));
