import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./styles/main.css";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import VisibilityFilters from "./components/Filters";

export default function App() {
  const todos = useSelector((state) => state);

  return (
    <div className="todo-app my-3">
      <VisibilityFilters />
      <br></br>
      <h1>Todo List</h1>
      <AddTodo />
      <div className="todo-container">
        {todos.todo && todos.todo.length
          ? todos.todo.map((todo) => {
              return todos.filters == "all" ? (
                <TodoItems key={todo.id} todo={todo} filters={todos.filters} />
              ) : todos.filters == "completed" ? (
                todo.completed && (
                  <TodoItems
                    key={todo.id}
                    todo={todo}
                    filters={todos.filters}
                  />
                )
              ) : (
                !todo.completed && (
                  <TodoItems
                    key={todo.id}
                    todo={todo}
                    filters={todos.filters}
                  />
                )
              );
            })
          : "No todos, yet!"}
      </div>
    </div>
  );
}
