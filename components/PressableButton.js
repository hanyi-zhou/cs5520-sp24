import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function PressableButton({
  customStyle,
  onPressFunction,
  children,
}) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.defaultStyle,
        customStyle,
        pressed && styles.pressed,
      ]}
      onPress={onPressFunction}
    >
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  defaultStyle: {
    padding: 5,
    borderRadius: 5,
    color: "#aaa",
  },
  pressed: {
    opacity: 0.5,
  },
});
