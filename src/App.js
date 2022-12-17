import React from "react";
import { useSelector } from "react-redux";
import "./styles/main.css";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import VisibilityFilters from "./components/Filters";

export default function App() {
  const { todos, filters, colors } = useSelector((state) => state);

  return (
    <div className="todo-app my-3">
      <VisibilityFilters />
      <br></br>
      <h1>Todo List</h1>
      <AddTodo />
      <div className="todo-container">
        {todos && todos.length
          ? todos.map((todo) => {
              return filters == "all" ? (
                <TodoItems
                  key={todo.id}
                  todo={todo}
                  filters={filters}
                  color={colors}
                />
              ) : filters == "completed" ? (
                todo.completed && (
                  <TodoItems
                    key={todo.id}
                    todo={todo}
                    filters={filters}
                    color={colors}
                  />
                )
              ) : (
                !todo.completed && (
                  <TodoItems
                    key={todo.id}
                    todo={todo}
                    filters={filters}
                    color={colors}
                  />
                )
              );
            })
          : "No todos, yet!"}
      </div>
    </div>
  );
}
