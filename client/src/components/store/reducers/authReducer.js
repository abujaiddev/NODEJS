import { USER_LOGIN } from "../actions/actionTypes";

const initialState = {
  isAuthenticated: null,
  user: null
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        isAuthenticated: action.payload.token,
        user: action.payload.token
      };
    default:
      return state;
  }
};
