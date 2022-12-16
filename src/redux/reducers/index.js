import { combineReducers } from "redux";
import filters from "./filters";
import todos from "./todos";
import colors from "./colors";

export default combineReducers({ todos, filters, colors });
