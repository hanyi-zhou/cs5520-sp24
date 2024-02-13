import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import PressableButton from "./PressableButton";
import { AntDesign } from "@expo/vector-icons";

export default function GoalItem({ item, deleteFunction, detailFunction }) {
  function deleteHandler() {
    deleteFunction(item.id);
    // pass the id to the delete function
  }
  function goalPressHandler() {
    detailFunction(item);
  }

  return (
    <View>
      <Pressable
        // style={({ pressed }) => {
        //   return { opacity: pressed ? 0.5 : 1 };
        // }}
        style={({ pressed }) => {
          return [styles.textContainer, pressed ? styles.pressed : null];
        }}
        onPress={goalPressHandler}
        android_ripple={{ color: "#e9e" }}
      >
        <Text style={styles.text}>{item.text}</Text>
        {/* <Button title="X" onPress={deleteHandler} color="grey" /> */}
        <PressableButton onPressFunction={deleteHandler}>
          <AntDesign name="delete" size={24} color="black" />
        </PressableButton>
        <Button title="i" onPress={goalPressHandler} color="yellow" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 30,
    color: "white",
    padding: 5,
    borderRadius: 10,
  },
  textContainer: {
    borderRadius: 10,
    backgroundColor: "#929",
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pressed: {
    opacity: 0.5,
    borderColor: "black",
    padding: 10,
  },
});
