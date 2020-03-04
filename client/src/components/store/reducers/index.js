import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { errorReducer } from "./errorReducer";
import bookReducer from "./bookReducer";
import profileReducer from "./profileReducer";

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  book: bookReducer,
  profile: profileReducer
});
