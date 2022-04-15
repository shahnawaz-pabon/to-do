import React from "react";
import { useSelector } from "react-redux";
import "./styles/main.css";

export default function App() {
  const todos = useSelector((state) => state);

  return (
    <div className="app">
      <h1>Todo List</h1>
    </div>
  );
}
