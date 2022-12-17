import { SET_LOCATION, SET_IS_COLOR_OPEN } from "../actions";

const initialState = {
  location: {},
  isColorOpen: false,
};

const colors = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATION: {
      return {
        location: action.payload,
        isColorOpen: state.isColorOpen,
      };
    }
    case SET_IS_COLOR_OPEN: {
      return {
        location: state.location,
        isColorOpen: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default colors;
