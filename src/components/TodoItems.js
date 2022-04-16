import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { deleteTodo, updateTodo } from "../redux/actions";

const TodoItems = ({ todo }) => {
  const dispatch = useDispatch();
  const [editable, setEditable] = useState(false);
  const [changedItem, setChangedItem] = useState();

  return (
    <div>
      <div className="row mx-2 align-items-center border m-1">
        <div className="col">
          {editable ? (
            <div>
              <input
                className="control-form"
                value={changedItem}
                onChange={(e) => setChangedItem(e.target.value)}
              />
              <span
                className="btn badge badge-success m-2"
                onClick={() => {
                  dispatch(
                    updateTodo([
                      {
                        id: todo.id,
                        item: todo.item,
                      },
                      {
                        id: todo.id,
                        item: changedItem,
                      },
                    ])
                  );
                  setEditable(!editable);
                }}
              >
                save
              </span>
            </div>
          ) : (
            <h6>{todo.item}</h6>
          )}
        </div>
        <span
          className="btn badge badge-warning m-2"
          onClick={() => setEditable(!editable)}
        >
          Edit
        </span>
        <span
          className="btn badge badge-danger m-2"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          Delete
        </span>
      </div>
    </div>
  );
};

export default TodoItems;
