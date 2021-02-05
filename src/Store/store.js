import { createStore } from "redux";
import addTodoReducer from "../Reducers/addTodoReducer";

const store = createStore(addTodoReducer);

export default store;
