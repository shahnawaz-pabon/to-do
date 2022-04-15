import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actions";
import { todos } from "./states";

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

    default:
      return state;
  }
};
