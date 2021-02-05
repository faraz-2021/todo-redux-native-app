import React from "react";
import {

  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { Colors } from "../components/color/color";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import { check } from '../Actions/addTodo';

const List = (props) => {
  
  return (
  
      <FlatList
        data={props.todo}
        extraData={props.todo}
        renderItem={({ item }) => {
          return (
            <View style={styles.todoContainer}>
              <TouchableOpacity
                onPress={() => props.check(item.id)}
                color="transparent"
                underlayColor={"transparent"}
              >
                {item.status ? (
                  <AntDesign
                    name={"checkcircle"}
                    size={28}
                    color={Colors.green}
                    style={styles.checkIcon}
                  />
                ) : (
                  <Entypo
                    name={"circle"}
                    size={28}
                    color={Colors.grey}
                    style={styles.checkIcon}
                  />
                )}
              </TouchableOpacity>

              <View style={styles.todo}>
                <Text
                  style={[
                    styles.todoText,
                    { textDecorationLine: item.status ? "line-through" : "none" },
                  ]}
                >
                  {item.title}
                </Text>
                <View
                  style={[
                    styles.status,
                    { backgroundColor: item.status ? Colors.green : Colors.red },
                  ]}
                />
              </View>
            </View>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />
   
  );
};
const styles = StyleSheet.create({
  flex: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 18,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey,
    height: 80,
    alignContent: "center",
  },
  flex1: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: Colors.fadeWhite,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 25,
    marginLeft: 10,
  },
  title1: {
    fontSize: 25,
    marginLeft: 10,
    textDecorationLine: "line-through",
    opacity: 0.3,
  },
  indicator: {
    color: Colors.green,
    fontSize: 25,
  },
  indicator2: {
    color: Colors.red,
    fontSize: 25,
  },
  checkButton: {
    fontSize: 30,
    color: Colors.blue,
  },
  todoContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  todo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    borderBottomColor: Colors.gray,
    borderBottomWidth: 1,
  },
  todoText: {
    fontSize: 16,
  },
  status: {
    width: 12,
    height: 12,
    marginHorizontal: 20,
    borderRadius: 6,
  },
  checkIcon: {
    marginHorizontal: 10,
  },
});


function mapDispatchToProps(dispatch) {
  return {
    check: (id)=>{dispatch(check(id))}
    }
}

export default connect(null,mapDispatchToProps)(List);
