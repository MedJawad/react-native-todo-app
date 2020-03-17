import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const Goal = ({ title, handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.goalStyle}>
        <Text> {title} </Text>
      </View>
    </TouchableOpacity>
  );
};
export default Goal;

const styles = StyleSheet.create({
  goalStyle: {
    padding: 10,
    marginVertical: 5,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "#ccc"
  },
  addButton: {
    color: "red",
    width: 10
  }
});
