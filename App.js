import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import NoGoalsItem from "./components/NoGoalsItem";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      { text: enteredGoalText, key: Math.random().toString() },
      ...currentCourseGoals,
    ]);

    endAddGoalHandler();
  }

  function deleteGoalHandler(goalKey) {

    // console.log("DELETING GOAL WITH KEY: ", goalKey);
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.key !== goalKey);
    });
  }

  function startAddGoalHandler() {
    setIsModalVisible(true);
  }

  function endAddGoalHandler() {
    setIsModalVisible(false);
  }
  return (
<>

<StatusBar style="light"/>
<View style={styles.appContainer}>

<Button title="Add New Goal" color="#5e0acc" onPress={startAddGoalHandler} />
<GoalInput addGoalHandler={addGoalHandler} visible= {isModalVisible} onCancel= {endAddGoalHandler} />
{courseGoals.length > 0 ? (
  <View style={styles.goalsContainer}>
    <FlatList
      data={courseGoals}
      renderItem={(itemData) => {
        return <GoalItem  goalItem={itemData.item} deleteGoalHandler={deleteGoalHandler} />;
      }}
      alwaysBounceVertical={false}
    />
  </View>
) : (
  <NoGoalsItem></NoGoalsItem>
)}

{/* <ScrollView al style={styles.goalsContainer}>
  {courseGoals.length > 0 ? (
    courseGoals.map((goal) => (
      <View style={styles.goalItem} key={goal}>
        <Text style={styles.text}>{goal}</Text>
      </View>
    ))
  ) : (
    <View style={styles.noGoalItem}>
      <Text style={styles.text}>No goals yet</Text>
    </View>
  )}
</ScrollView> */}
</View>
</>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 60,
    paddingHorizontal: 20,
    flex: 1,
    // backgroundColor: '#1e805a'
  },

  goalsContainer: {
    flex: 5,
  },
});
