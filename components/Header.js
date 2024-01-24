import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Header(props) {
  console.log(props);
  return (
    <View>
      <Text style={styles.header}>Welcome to {props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    color: "purple",
    fontSize: 20,
    fontWeight: "bold",
    borderWidth: 1,
    padding: 5,
    borderColor: "purple",
    borderRadius: 5,
  },
});
