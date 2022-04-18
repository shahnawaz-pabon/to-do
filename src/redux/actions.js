export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const SET_FILTER = "SET_FILTER";

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo,
  };
}

export function deleteTodo(todoid) {
  return {
    type: DELETE_TODO,
    payload: todoid,
  };
}

export function updateTodo(todo) {
  return {
    type: UPDATE_TODO,
    payload: todo,
  };
}

export function setFilter(filter) {
  return {
    type: SET_FILTER,
    payload: { filter },
  };
}
