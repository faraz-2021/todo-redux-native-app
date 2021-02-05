import React from "react";
import { View, StyleSheet } from "react-native";
import TodoHeader from "./TodoHeader";
import List from "./List";
import Constants from "expo-constants";

export default function TodoApp({ type, todo }) {

  return (
    <View style={styles.Margin}>
      <TodoHeader type={type} />
      <List todo={todo} />
    </View>
  );
}

const styles = StyleSheet.create({
  Margin: {
    marginTop: Constants.statusBarHeight,
  },
});
