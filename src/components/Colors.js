import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setColorsLocation, setIsColorsOpen } from "../redux/actions";

const Colors = () => {
  const dispatch = useDispatch();
  const { location, isColorOpen } = useSelector((state) => state.colors);
  const colorsRef = useRef(null);

  useEffect(() => {
    const { top, right } = location;
    colorsRef.current.style.left = `${right + 30}px`;
    colorsRef.current.style.top = `${top - 20}px`;
  }, [location]);

  const changeColor = (e) => {
    const color = e.target.style.backgroundColor;
    const { id } = location;
    // setTasks(
    //   tasks.map((task) => {
    //     return task.id === id ? { ...task, color: color } : task;
    //   })
    // );
    console.log("color, id");
    console.log(color, id);
    dispatch(setIsColorsOpen(false));
  };

  return (
    <div ref={colorsRef} className="color-container">
      <span style={{ backgroundColor: "#eb1313" }} onClick={changeColor}></span>
      <span style={{ backgroundColor: "#e91e63" }} onClick={changeColor}></span>
      <span style={{ backgroundColor: "#673ab7" }} onClick={changeColor}></span>
      <span style={{ backgroundColor: "#009688" }} onClick={changeColor}></span>
      <span style={{ backgroundColor: "#4caf50" }} onClick={changeColor}></span>
      <span style={{ backgroundColor: "#00bcd4" }} onClick={changeColor}></span>
      <span style={{ backgroundColor: "#ff5722" }} onClick={changeColor}></span>
      <span style={{ backgroundColor: "#607d8b" }} onClick={changeColor}></span>
      <span style={{ backgroundColor: "#795548" }} onClick={changeColor}></span>
    </div>
  );
};

export default Colors;
