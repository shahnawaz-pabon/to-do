import { SET_FILTER } from "../actions";
import { FILTERS } from "../../constants/filter";

const initialState = FILTERS.ALL;

const filters = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default filters;
