import { FILTERS } from "../constants/filter";

export const getTodosState = (store) => store.todos;

export const getTodoList = (store) =>
  getTodosState(store) ? getTodosState(store) : [];

export const getTodoById = (store, id) =>
  getTodosState(store) ? { ...getTodosState(store).id, id } : {};

/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */
export const getTodos = (store) =>
  getTodoList(store).map((id) => getTodoById(store, id));

export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
  const allTodos = getTodos(store.todo);
  // const allTodos = store.todo;
  console.log("allTodos");
  console.log(allTodos.filter((todo) => todo.completed));
  switch (visibilityFilter) {
    case FILTERS.COMPLETED:
      return allTodos.filter((todo) => todo.completed);
    case FILTERS.INCOMPLETE:
      return allTodos.filter((todo) => !todo.completed);
    case FILTERS.ALL:
    default:
      return allTodos;
  }
};
