import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v1 as uuid } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus, faCirclePlus } from "@fortawesome/free-solid-svg-icons";

import { addTodo } from "../redux/actions";

const AddtTodo = () => {
  const dispatch = useDispatch();
  const [itemName, setItemName] = useState();

  return (
    <div className="my-3">
      <input
        className="from-control"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />

      <button
        className="btn btn-primary m-2"
        onClick={() => {
          dispatch(
            addTodo({
              id: uuid(),
              item: itemName,
            })
          );
          setItemName("");
        }}
      >
        <FontAwesomeIcon icon={faFolderPlus} />
      </button>
    </div>
  );
};

export default AddtTodo;
