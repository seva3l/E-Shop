import { View, TextInput, TextInputProps } from "react-native";
import React from "react";
import { Text } from "react-native";
import Color from "../../constants/Color";

interface IbaseTextInput extends TextInputProps {
  value?: string;
  placeholder?: string;
  label?: string;
  setText?: (e: string) => void;
}

export default function PrimaryTextInput(props: IbaseTextInput) {
  return (
    <View>
      {props.label !== undefined && props.label !== "" && (
        <Text>{props.label}</Text>
      )}
      <TextInput
        value={props.value}
        placeholder={props.placeholder}
        onChangeText={props.setText}
        autoCapitalize="none"
        style={{
          marginTop: 5,
          padding: 20,
          borderWidth: 1,
          borderRadius: 8,
          marginBottom: 40,
          borderColor: Color.DARK_BLUE,
        }}
      />
    </View>
  );
}
