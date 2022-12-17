import { SET_CUSTOM_EDIT } from "../actions";

const initialState = {
  isEditing: false,
  editId: null,
  name: "",
};

const others = (state = initialState, action) => {
  switch (action.type) {
    case SET_CUSTOM_EDIT: {
      return {
        ...action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default others;
