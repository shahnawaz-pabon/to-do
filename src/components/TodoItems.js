import React, { useState } from "react";
import { useDispatch, connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cx from "classnames";
import {
  faTrash,
  faPenToSquare,
  faClipboardCheck,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";

import { deleteTodo, updateTodo, toggleTodo } from "../redux/actions";

import { getTodosByVisibilityFilter } from "../redux/selectors";

const TodoItems = ({ todo }) => {
  const dispatch = useDispatch();
  const [editable, setEditable] = useState(false);
  const [changedItem, setChangedItem] = useState();
  const [isColorsOpen, setIsColorsOpen] = useState(false);
  const [location, setLocation] = useState({});

  const showColors = (e, id) => {
    const { top, right } = e.target.getBoundingClientRect();

    console.log(top, right, id);
    setLocation({ top, right, id });
    setIsColorsOpen(true);
  };

  return (
    <div className="row mx-2 border m-1 todo">
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

      {/* Choose color action */}
      <span
        className="btn badge badge-dark m-2"
        onClick={(e) => showColors(e, todo.id)}
      >
        <FontAwesomeIcon icon={faPaintBrush} />
      </span>
      {/* End of Choose color action */}
    </div>
  );
};

// export default TodoItems;

const mapStateToProps = (state) => {
  const { filters } = state;
  console.log("visibilityFilter");
  console.log(filters);
  const todos = getTodosByVisibilityFilter(state, filters);
  return { todos };
  //   const allTodos = getTodos(state);
  //   return {
  //     todos:
  //       visibilityFilter === VISIBILITY_FILTERS.ALL
  //         ? allTodos
  //         : visibilityFilter === VISIBILITY_FILTERS.COMPLETED
  //           ? allTodos.filter(todo => todo.completed)
  //           : allTodos.filter(todo => !todo.completed)
  //   };
};
// export default TodoList;
export default connect(mapStateToProps)(TodoItems);
