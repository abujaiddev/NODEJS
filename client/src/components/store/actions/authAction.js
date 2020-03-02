import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../../util/setAuthToken";
import { USER_LOGIN, GET_ERRORS, SET_CURRENT_USER } from "./actionTypes";

export const userLogin = (userData, history) => dispatch => {
  axios
    .post(`/api/auth`, userData)
    .then(result => {
      const { token } = result.data;
      const decoded = jwt_decode(token);
      setAuthToken(decoded);
      localStorage.setItem("token", token);
      dispatch(setCurrentUser(decoded));
      history.push("/dashboard/UserDashboard");
    })
    .catch(error => {
      dispatch({ type: GET_ERRORS, payload: error.response.data.msg });
      console.log(error);
    });
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const logout = () => dispatch => {
  localStorage.removeItem("token");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};
