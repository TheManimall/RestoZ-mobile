import React from "react";
import { View } from "react-native";
import { Item, Input, Label } from "native-base";

const TextField = ({ input, label, type }) => (
  <View>
    <Item stackedLabel>
      <Label>{label}</Label>
      <Input
        {...input}
        type={type}
        // onChangeText={input.onChange}
        // onBlur={input.onBlur}
        // onFocus={input.onFocus}
        // value={input.value}
      />
    </Item>
  </View>
);

export default TextField;