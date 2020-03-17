import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [inputModalVisible, setInputModalVisible] = useState(false);
  const updateGoals = goal => {
    setGoals(goals => [{ index: goals.length, ...goal }, ...goals]);
    setInputModalVisible(false);
  };

  const deleteGoal = index => {
    const newGoals = goals.filter(goal => goal.index !== index);
    setGoals(newGoals);
  };
  return (
    <View style={styles.container}>
      <Button
        title="Add a New Goal !"
        onPress={() => setInputModalVisible(true)}
      />
      <GoalInput
        cancelAdd={() => setInputModalVisible(false)}
        updateGoals={updateGoals}
        isVisible={inputModalVisible}
      />
      <FlatList
        keyExtractor={item => item.index.toString()}
        data={goals}
        renderItem={itemData => (
          <GoalItem
            handlePress={() => deleteGoal(itemData.item.index)}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  }
});
