import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
import { Colors } from "./color/color";
import { Add } from "../Actions/addTodo";
import { connect } from "react-redux";

const TodoModal = (props) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.innerView}>
            <Text style={styles.modalText}>Add Todo</Text>
            <TextInput
              style={styles.modalView}
              onChangeText={(inputValue) => setInputValue(inputValue)}
              value={inputValue}
            />
            <View style={styles.flex}>
              <TouchableOpacity onPress={props.handleClick}>
                <Text style={styles.Button}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  props.Add(inputValue);
                  props.setModalVisible(false);
                }}
              >
                <Text style={styles.Button}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    height: 180,
    width: 290,
    marginLeft: 9,
    backgroundColor: Colors.white,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  Button: {
    color: Colors.blue,
    fontSize: 20,
    marginTop: 10,
  },
  textStyle: {
    color: Colors.white,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    width: 300,
    fontWeight: "bold",
    fontSize: 25,
    marginLeft: 10,
  },
  flex: {
    width: 250,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 20,
  },
  innerView: {
    borderRadius: 20,
    padding: 15,
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
  },
});

function mapDispatchToProps(dispatch) {
  return {
    Add: (inputValue) => {
      dispatch(Add(inputValue));
    },
  };
}
export default connect(null, mapDispatchToProps)(TodoModal);
