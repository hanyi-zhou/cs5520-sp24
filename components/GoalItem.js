import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function GoalItem({ item, deleteFunction, detailFunction }) {
  function deleteHandler() {
    deleteFunction(item.id);
    // pass the id to the delete function
  }

  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{item.text}</Text>
      <Button title="X" onPress={deleteHandler} color="grey" />
      <Button
        title="i"
        onPress={() => {
          detailFunction(item);
        }}
        color="yellow"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 30,
    color: "white",
    padding: 15,
    borderRadius: 10,
  },
  textContainer: {
    borderRadius: 10,
    backgroundColor: "#929",
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
