import React, { useState, useEffect, useRef } from "react";
import { useDispatch, connect, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cx from "classnames";
import {
  faTrash,
  faPenToSquare,
  faClipboardCheck,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";

import Colors from "./Colors";

import {
  deleteTodo,
  updateTodo,
  toggleTodo,
  setColorsLocation,
  setIsColorsOpen,
  setCustomEdit,
} from "../redux/actions";

import { getTodosByVisibilityFilter } from "../redux/selectors";

const TodoItems = ({ todo }) => {
  const dispatch = useDispatch();
  const [editable, setEditable] = useState(false);
  const [changedItem, setChangedItem] = useState();
  const inputRef = useRef(null);
  const { isColorOpen } = useSelector((state) => state.colors);

  const showColors = (e, id) => {
    const { top, right } = e.target.getBoundingClientRect();
    dispatch(setColorsLocation({ top, right, id }));
    dispatch(setIsColorsOpen(true));
  };

  const editTodo = (todo) => {
    dispatch(
      setCustomEdit({ isEditing: true, editId: todo.id, name: todo.item })
    );
  };

  return (
    <div
      className="row mx-2 border m-1 todo"
      style={{ background: todo.color }}
    >
      <div className="col todo-col">
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
        onClick={() => editTodo(todo)}
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

      {/* Choose color action */}
      <span
        className="btn badge badge-dark m-2"
        onClick={(e) => showColors(e, todo.id)}
      >
        <FontAwesomeIcon icon={faPaintBrush} />
      </span>
      {/* End of Choose color action */}

      {isColorOpen && <Colors />}
    </div>
  );
};

// export default TodoItems;

const mapStateToProps = (state) => {
  const { filters } = state;
  const todos = getTodosByVisibilityFilter(state, filters);
  return { todos };
};

export default connect(mapStateToProps)(TodoItems);
