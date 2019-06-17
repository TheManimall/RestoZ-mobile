import React from "react";
import { View, Text } from "react-native";
import { Item, Input, Label } from "native-base";

const TextField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <View>
    <Item stackedLabel>
      <Label>{label}</Label>
      <Input
        {...input}
        type={type}
        secureTextEntry={type === 'password' ? true: false}
      />
    </Item>
    {touched && ((error && <Text style={{marginLeft: 40, color: 'red', marginTop: 10}}>{error}</Text>) || (warning && <Text>{warning}</Text>))}

  </View>
);

export default TextField;