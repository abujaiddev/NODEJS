import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { errorReducer } from "./errorReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  profile: profileReducer,
  users: usersReducer
});
