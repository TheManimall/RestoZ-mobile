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
import { signUp } from "../store/actions/authActions";
import { required, maxLength15, minValue6, email } from './validations';

class SignUpScreen2 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigate } = this.props.navigation;

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
          <Form onSubmit={this._handleSubmit}>
            <Field
              name="login"
              type="text"
              label="Логін"
              component={TextField}
              validate={[ required, maxLength15 ]}
            />
            <Field
              name="email"
              type="email"
              label="email"
              component={TextField}
              validate={[ required, maxLength15, email ]}
            />
            <Field
              name="password"
              type="password"
              label="пароль"
              component={TextField}
              validate={[ required, maxLength15, minValue6 ]}
            />
             <Field
              name="repeat"
              type="password"
              label="повторіть пароль"
              component={TextField}
              validate={[ required, maxLength15 ]}
            />
            <Button
              style={styles.button}
              onPress={() => { this.props.handleSubmit(signUp), console.log('asaaaaa'), navigate("SignIn")}}
              block
              primary
            >
              <Text>Зареєструватися</Text>
            </Button>
            <Button
              style={styles.button}
              onPress={() => navigate("SignIn")}
              block
              danger
            >
              <Text>Вхід</Text>
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
  signUp,
};

export default connect(null, mapDispatchToProps)(reduxForm({
  form: 'SignUp',
})(SignUpScreen2));
