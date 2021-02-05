import { ADD, CHECK } from "../Constant/type";

const initialTodos = {
  todos: [
    { id: 1, title: "abc", status: false },
    { id: 2, title: "xyz", status: false },
  ],
};

const addTodoReducer = (state = initialTodos, action) => {
  switch (action.type) {
    case ADD:
      return {
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            title: action.inputValue,
            status: false,
          },
        ],
      };
  
    case CHECK: {
      const newList = state.todos.map((e) => {
        if (e.id == action.id) {
          return { ...e, status: !e.status };
        } else {
          return { ...e };
        }
      });
      return { todos: newList };
    }

    default:
      return state;
  }
};

export default addTodoReducer;
