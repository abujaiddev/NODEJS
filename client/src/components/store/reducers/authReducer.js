import { SET_CURRENT_USER } from "../actions/actionTypes";

const initialState = {
  isAuthenticated: null,
  user: null
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: action.payload,
        user: action.payload
      };
    default:
      return state;
  }
};
