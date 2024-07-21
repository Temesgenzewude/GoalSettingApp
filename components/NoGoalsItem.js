import { View, Text, StyleSheet } from "react-native";

export default function NoGoalsItem() {
  return (
    <View style={styles.noGoalItem}>
      <Text style={styles.text}>No goals yet...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",

    textAlign: "center",
  },
  noGoalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0e0e",
  },
});
