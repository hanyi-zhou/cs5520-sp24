import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";

export default function App() {
  const appName = "My awesome app";
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header name={appName} version={2}>
        <Text>child 1</Text>
      </Header>
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
});
