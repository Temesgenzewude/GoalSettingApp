import { View, Text, StyleSheet, Pressable} from "react-native";
function GoalItem(props) {
  const goalKey = props.goalItem.key;
  return (

      <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={props.deleteGoalHandler.bind(this, goalKey)}

       style = {({pressed})=> pressed && styles.pressedItem}
      >
        <Text style={styles.text}>{props.goalItem.text}</Text>
      </Pressable>
    </View>

  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "#fff",
  },

  text: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    padding: 8,

    textAlign: "center",
  },
  pressedItem: {
    opacity: 0.5,
    backgroundColor: "#dddddd",

  

  }
});
