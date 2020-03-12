import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { errorReducer } from "./errorReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import friendReducer from "./friendReducer";

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  profile: profileReducer,
  users: usersReducer,
  friendRequest: friendReducer
});
