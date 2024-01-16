import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { useState } from "react";

export default function Input() {
  const [text, setText] = useState(""); // array destructuring
  // callback handler
  function changeTextHandler(changeText) {
    console.log("user is typing", changeText);
    setText(changeText);
  }

  return (
    <View>
      <TextInput
        placeholder="Type something"
        style={styles.input}
        value={text}
        onChangeText={changeTextHandler}
      />
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "purple",
    width: 105,
  },
});
