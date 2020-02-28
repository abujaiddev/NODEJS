import { GET_ERRORS, CLEAR_ERRORS } from "../actions/actionTypes";

const initialState = {
  msg: {},
  status: null,
  id: null
};
export const errorReducer = (state = initialState, action) => {
  switch (action.types) {
    case GET_ERRORS:
      return {
        msg: action.payload,
        status: false
      };
    default:
      return state;
  }
};
