import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import Header from "./Header";
import Input from "./Input";
import { useState } from "react";
import GoalItem from "./GoalItem";
import PressableButton from "./PressableButton";

export default function Home({ navigation }) {
  const appName = "My awesome app";
  const [text, setText] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  function receiveInput(data) {
    const newGoal = { text: data, id: Math.random() };
    setGoals((currentGoals) => [...currentGoals, newGoal]);
    setText(data);
    setIsModalVisible(false);
  }
  function dismissModal() {
    setIsModalVisible(false);
  }
  // update to receive the id
  function goalDeleteHandler(deletedId) {
    console.log("delete pressed");
    // we need to know which item was clicked? they have unique id
    // use the id to filter the array
    setGoals((currentGoals) => {
      return goals.filter((goal) => goal.id !== deletedId);
    });
  }

  function goalPressHandler(goalItem) {
    // navigate to GoalDetails using navigation
    navigation.navigate("Details", { goalData: goalItem });
    console.log(goalItem);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topView}>
        <StatusBar style="auto" />
        <Header name={appName} version={2} />
        {/* <Button title="Add a goal" onPress={() => setIsModalVisible(true)} /> */}
        <PressableButton
          // customStyle={styles.addButton}
          onPressFunction={() => setIsModalVisible(true)}
        >
          <Text style={{ fontSize: 20 }}>Add a goal</Text>
        </PressableButton>
        <Input
          inputHandler={receiveInput}
          modalVisible={isModalVisible}
          dismissModal={dismissModal}
        />
      </View>
      <View style={styles.bottomView}>
        <FlatList
          data={goals}
          renderItem={({ item }) => {
            console.log(item);
            return (
              <GoalItem
                item={item}
                deleteFunction={goalDeleteHandler}
                detailFunction={goalPressHandler}
              />
            );
          }}
        />
        {/* <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {goals.map((goal) => {
            return (
              <View style={styles.textContainer} key={goal.id}>
                <Text style={styles.text}>{goal.text}</Text>
              </View>
            );
          })}
        </ScrollView> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-around",
  },
  topView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  scrollViewContent: {
    alignItems: "center",
  },
  bottomView: { flex: 4, backgroundColor: "thistle" },
  // addButton: {
  //   backgroundColor: "#979",
  // },
});
