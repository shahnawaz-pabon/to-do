import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v1 as uuid } from "uuid";

import { addTodo, updateTodo, setCustomEdit } from "../redux/actions";

const AddTodo = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const { others } = useSelector((state) => state);
  const [itemName, setItemName] = useState();

  useEffect(() => {
    if (others.isEditing) {
      setItemName(others.name);
      inputRef.current.focus();
    }
  }, [others.editId]);

  const addTask = () => {
    if (others.name && others.isEditing) {
      dispatch(
        updateTodo([
          {
            id: others.editId,
            item: others.name,
          },
          {
            id: others.editId,
            item: itemName,
          },
        ])
      );
      // Reset states
      dispatch(setCustomEdit({ isEditing: false, editId: null, name: "" }));
      setItemName("");
    } else {
      if (itemName) {
        dispatch(
          addTodo({
            id: uuid(),
            item: itemName,
          })
        );
        setItemName("");
      } else {
        alert("Please write something...");
      }
    }
  };

  return (
    <div className="my-3">
      <input
        ref={inputRef}
        className="from-control"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />

      <button
        className={
          others.isEditing
            ? "btn btn-warning btn-sm m-2"
            : "btn btn-primary btn-sm m-2"
        }
        onClick={() => addTask()}
      >
        {others.isEditing ? "Edit" : "Add"}
      </button>
    </div>
  );
};

export default AddTodo;
