import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
export default function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState(null);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.addGoalHandler(enteredGoalText);
    setEnteredGoalText(null);
  }
  return (
    <Modal visible={props.visible} animationType="fade">
     
      <View style={styles.inputContainer}>
      <Image style={styles.image} source={require("../assets/images/goal.png")} />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal here!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
          placeholderTextColor='gray'
        />

        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color='#f31282' />
          </View>
          <View style={styles.button}>
            <Button onPress={addGoalHandler} title="Add Goal"  color='#b180f0'/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",

    // marginVertical: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: "#cccccc",
    flex: 1,
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    height: 40,
    padding: 10,
    color: '#fff',
    
  },

  buttonsContainer: {
    flexDirection: "row",

    marginVertical: 16,
    marginHorizontal: 20,
  },
  image: {
    width: 100,
    height: 100,
    // resizeMode: "contain",
    margin: 20,
  },
  button: {
    width: 120,
    marginHorizontal: 10,
  },
});
