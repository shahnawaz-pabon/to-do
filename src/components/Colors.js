import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsColorsOpen, setTodos } from "../redux/actions";

const Colors = () => {
  const dispatch = useDispatch();
  const { location } = useSelector((state) => state.colors);
  const { todos } = useSelector((state) => state);
  const colorsRef = useRef(null);

  useEffect(() => {
    const { top, right } = location;
    colorsRef.current.style.left = `${right + 30}px`;
    colorsRef.current.style.top = `${top - 20}px`;
  }, [location]);

  const changeColor = (e) => {
    const color = e.target.style.backgroundColor;
    const { id } = location;

    dispatch(
      setTodos(
        todos.map((todo) => {
          return todo.id === id ? { ...todo, color: color } : todo;
        })
      )
    );

    dispatch(setIsColorsOpen(false));
  };

  return (
    <div ref={colorsRef} className="color-container">
      <span style={{ backgroundColor: "#d35400" }} onClick={changeColor}></span>
      <span style={{ backgroundColor: "#2c3e50" }} onClick={changeColor}></span>
      <span style={{ backgroundColor: "#1abc9c" }} onClick={changeColor}></span>
      <span style={{ backgroundColor: "#2980b9" }} onClick={changeColor}></span>
      <span style={{ backgroundColor: "#7f8c8d" }} onClick={changeColor}></span>
      <span style={{ backgroundColor: "#ffcb65" }} onClick={changeColor}></span>
      <span style={{ backgroundColor: "#AEB6BF" }} onClick={changeColor}></span>
      <span style={{ backgroundColor: "#27ae60" }} onClick={changeColor}></span>
      <span style={{ backgroundColor: "#008080" }} onClick={changeColor}></span>
    </div>
  );
};

export default Colors;
