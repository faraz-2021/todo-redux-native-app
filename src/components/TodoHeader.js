import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Colors } from "./color/color";
import TodoModal from "./TodoPopUp.js";

export default function TodoHeader(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const handleClick = () => {
    setModalVisible(false);
  };
  return (
    <View style={styles.Main}>
      <View style={styles.Head}>
        <Text style={styles.t1}>{props.type} </Text>
        {props.type == "Today" ? (
          <TouchableOpacity
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Icon name="pluscircleo" size={30} />
          </TouchableOpacity>
        ) : null}
      </View>
      {modalVisible ? (
        <TodoModal
          modalVisible={modalVisible}
          handleClick={handleClick}
          addTodos={props.addTodos}
          setModalVisible={setModalVisible}
          activeList={props.activeList}
        />
      ) : null}
      <View></View>
    </View>
  );
}
const styles = StyleSheet.create({
  Main: {
    backgroundColor: Colors.white,
    justifyContent: "center",

    borderBottomWidth: 1,
    borderBottomColor: Colors.grey,
    padding: 10,
  },
  Head: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  t1: {
    fontWeight: "bold",
    fontSize: 30,
  },
});
