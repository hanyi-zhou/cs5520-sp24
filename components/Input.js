import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from "react-native";
import React from "react";
import { useState } from "react";

export default function Input({ inputHandler, modalVisible, dismissModal }) {
  console.log(inputHandler);
  const [text, setText] = useState(""); // array destructuring

  // callback handler
  function changeTextHandler(changeText) {
    console.log("user is typing", changeText);
    setText(changeText);
  }

  function confirmHandler() {
    inputHandler(text);
    setText("");
  }

  function cancelHandler() {
    dismissModal();
  }

  return (
    <Modal visible={modalVisible} animationType="slide" transparent={true}>
      <View style={styles.container}>
        <View style={styles.modalView}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/2617/2617812.png",
            }}
            style={styles.image}
          />
          {/* <Image source={require("../assets/goal.png")} style={styles.image} /> */}
          <TextInput
            placeholder="Type something"
            style={styles.input}
            value={text}
            onChangeText={changeTextHandler}
          />
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonView}>
              <Button title="Cancel" onPress={cancelHandler} />
            </View>
            <View style={styles.buttonView}>
              <Button
                title="Confirm"
                onPress={confirmHandler}
                disabled={!text}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "purple",
    width: "50%",
  },
  modalView: {
    backgroundColor: "#999",
    borderRadius: 20,
    padding: "10%",
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonView: {
    margin: 5,
    width: "30%",
  },
});
