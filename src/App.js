import React from "react";
import { useSelector } from "react-redux";
import "./styles/main.css";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItems";

export default function App() {
  const todos = useSelector((state) => state);

  return (
    <div className="todo-app my-3">
      <h1>Todo List</h1>
      <AddTodo />
      <div className="todo-container">
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </div>
    </div>
  );
}
