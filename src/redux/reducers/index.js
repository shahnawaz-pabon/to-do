import { combineReducers } from "redux";
import filters from "./filters";
import todo from "./todos";

export default combineReducers({ todo, filters });
