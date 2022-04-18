import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cx from "classnames";
import {
  faTrash,
  faPenToSquare,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";

import { deleteTodo, updateTodo, toggleTodo } from "../redux/actions";

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
            <h6
              className={cx(
                "todo-item__text",
                todo && todo.completed && "todo-item__text--completed"
              )}
            >
              {todo && todo.completed ? "🚀" : "✍"} {todo.item}
            </h6>
          )}
        </div>

        {/* Toggle Todo action */}
        <span
          className="btn badge badge-info m-2"
          onClick={() => dispatch(toggleTodo(todo))}
        >
          <FontAwesomeIcon icon={faClipboardCheck} />
        </span>
        {/* End of Toggle Todo action */}

        {/* Edit Todo action */}
        <span
          className="btn badge badge-warning m-2"
          onClick={() => setEditable(!editable)}
        >
          <FontAwesomeIcon icon={faPenToSquare} />
        </span>
        {/* End of Edit Todo action */}

        {/* Delete Todo action */}
        <span
          className="btn badge badge-danger m-2"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          <FontAwesomeIcon icon={faTrash} />
        </span>
        {/* End of Delete Todo action */}
      </div>
    </div>
  );
};

export default TodoItems;
