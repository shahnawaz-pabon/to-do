import { ADD_TODO, DELETE_TODO, UPDATE_TODO, SET_FILTER } from "./actions";
import { todos } from "./states";
import { FILTERS } from "../constants/filter";

const initialState = FILTERS.ALL;

export const reducer = (state = todos, action) => {
  let newTodos;
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case DELETE_TODO:
      newTodos = [...state];
      newTodos = newTodos.filter((todo) => todo.id !== action.payload);
      return newTodos;

    case UPDATE_TODO:
      newTodos = [...state];
      console.log(action.payload);
      let getIndex = newTodos.findIndex(
        (item) => item.id === action.payload[0].id
      );
      console.log(getIndex);
      newTodos.splice(getIndex, 1, action.payload[1]);
      return newTodos;

    case SET_FILTER:
      // return action.payload.filter;
      console.log(action.payload.filter);

    default:
      return state;
  }
};
