import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Header from "./components/Header";
import { useState } from "react";

export default function App() {
  const appName = "My awesome app";
  const [text, setText] = useState(""); // array destructuring

  // callback handler
  function changeTextHandler(changeText) {
    console.log("user is typing", changeText);
    setText(changeText);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header name={appName} version={2} />
      <TextInput
        placeholder="Type something"
        style={styles.input}
        value={text}
        onChangeText={changeTextHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "purple",
    width: 105,
  },
});
