import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = ({ updateGoals, isVisible, cancelAdd }) => {
  const [input, setInput] = useState("");

  const handleChange = inputText => {
    setInput(inputText);
  };

  const handleAdd = () => {
    updateGoals({ value: input });
    setInput("");
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.addContainer}>
        <TextInput
          placeholder="Enter your Goal here"
          style={styles.textInput}
          value={input}
          onChangeText={handleChange}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={cancelAdd} />
          </View>
          <View style={styles.button}>
            <Button title="Add" onPress={handleAdd} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  addContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    width: "80%",
    padding: 10,
    marginBottom: 10
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "space-around"
  },
  button: {
    width: "40%"
  }
});

export default GoalInput;
