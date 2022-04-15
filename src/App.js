import React from "react";
import { useSelector } from "react-redux";
import "./styles/main.css";
import AddTodo from "./components/AddTodo";

export default function App() {
  const todos = useSelector((state) => state);

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddTodo />
    </div>
  );
}
