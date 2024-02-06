import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function GoalDetails({ route }) {
  const { goalData } = route.params;
  console.log(route.params);
  console.log(goalData);
  return (
    <View>
      <Text>
        You are viewing details of {goalData.text} with id
        {goalData.id}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
