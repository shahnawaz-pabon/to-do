export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const SET_FILTER = "SET_FILTER";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_LOCATION = "SET_LOCATION";
export const SET_IS_COLOR_OPEN = "SET_IS_COLOR_OPEN";

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

export function toggleTodo(todo) {
  return {
    type: TOGGLE_TODO,
    payload: todo,
  };
}

export function setFilter(filter) {
  return {
    type: SET_FILTER,
    payload: { filter },
  };
}

export function setColorsLocation(location) {
  return {
    type: SET_LOCATION,
    payload: location,
  };
}

export function setIsColorsOpen(colors) {
  return {
    type: SET_IS_COLOR_OPEN,
    payload: colors,
  };
}
