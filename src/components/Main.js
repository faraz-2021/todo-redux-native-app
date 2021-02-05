import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TodoApp from "./TodoApp";
import { connect } from "react-redux";
import { Colors } from "../components/color/color";

function HomeScreen({ todo }) {
  return (
    <View style={{}}>
      <TodoApp type="Today" todo={todo} />
    </View>
  );
}

function ActiveScreen({ todo }) {
  const [active, setActive] = useState([]);

  useEffect(() => {
    ActiveList();
  }, [ActiveList]);

  const ActiveList = () => {
    const Comp = todo.filter((item) => {
      if (!item.status) {
        return item;
      }
    });
    setActive(Comp);
  };

  return (
    <View style={{}}>
      <TodoApp type="Active" todo={active} />
    </View>
  );
}
function CompletedScreen({ todo }) {
  const [complete, setComplete] = useState([]);
  useEffect(() => {
    CompleteList();
  }, [CompleteList]);

  const CompleteList = () => {
    const Comp = todo.filter((item) => {
      if (item.status) {
        return item;
      }
    });
    setComplete(Comp);
  };

  return (
    <View style={{}}>
      <TodoApp type="Completed" todo={complete} />
    </View>
  );
}

const Tab = createBottomTabNavigator();

const Main = ({ todoList }) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.blue,
        inactiveTintColor: Colors.black,
        labelStyle: {
          fontSize: 20,
          fontWeight: "bold",
          padding: 1,
          marginBottom: 10,
        },
      }}
    >
      <Tab.Screen name="All" component={() => <HomeScreen todo={todoList} />} />
      <Tab.Screen
        name="Active"
        component={() => <ActiveScreen todo={todoList} />}
      />
      <Tab.Screen
        name="Completed"
        component={() => <CompletedScreen todo={todoList} />}
      />
    </Tab.Navigator>
  );
};
const mapStateToProps = (state) => {
  return {
    todoList: state.todos,
  };
};

export default connect(mapStateToProps)(Main);
