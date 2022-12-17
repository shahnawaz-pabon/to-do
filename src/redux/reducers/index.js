import { combineReducers } from "redux";
import filters from "./filters";
import todos from "./todos";
import colors from "./colors";
import others from "./others";

export default combineReducers({ todos, filters, colors, others });
