import { ADD, CHECK } from "../Constant/type";

export const Add = (inputValue) => {
  return {
    type: ADD,
    inputValue,
  };
};

export const check = (id) => {
  return {
    type: CHECK,
    id,
  };
};
