import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../../util/setAuthToken";
import { GET_ERRORS, SET_CURRENT_USER } from "./actionTypes";

export const registerUser = (user, history) => dispatch => {
  axios
    .post(`/api/registerUser`, user)
    .then(result => {
      history.push("/login");
    })
    .catch(err => {
      // console.log(err.response.data);
      dispatch({ type: GET_ERRORS, payload: err.response.data });
    });
};

export const userLogin = (userData, history) => dispatch => {
  axios
    .post(`/api/auth`, userData)
    .then(result => {
      const { token } = result.data;
      const decoded = jwt_decode(token);
      setAuthToken(decoded);
      localStorage.setItem("token", token);
      dispatch(setCurrentUser(decoded));
      history.push("dashboard/user");
    })
    .catch(error => {
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data
      });
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
  window.location.href = "/login";
};
