import { StyleSheet, Text, View, Button } from "react-native";
import React, { useEffect } from "react";

export default function GoalDetails({ navigation, route }) {
  const { goalData } = route.params;
  const [warning, setWarning] = React.useState(false);
  console.log(goalData);
  function warningFunction() {
    console.log("Warning");
    setWarning(true);
  }
  // functions inside useEffect are called after the rendering
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Button title="Warning" onPress={warningFunction} color="gray" />
        );
      },
    });
  });
  return (
    <View>
      <Text>
        You are viewing details of {goalData.text} with id
        {goalData.id}
      </Text>
      {warning && <Text style={{ color: "red" }}>WARNING</Text>}
    </View>
  );
}

const styles = StyleSheet.create({});
