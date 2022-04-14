import React from "react";
import { useSelector } from "react-redux";

export default function App() {
  const todos = useSelector((state) => state);

  return (
    <div className="">
      <h1>To do List</h1>
    </div>
  );
}
