import { combineReducers } from "redux";
import filters from "./filters";
import todo from "./todos";
import colors from "./colors";

export default combineReducers({ todo, filters, colors });
