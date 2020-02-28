import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../../util/setAuthToken";
import { USER_LOGIN, AUTH_ERROR, GET_ERRORS } from "./actionTypes";

export const userLogin = userData => dispatch => {
  axios
    .post(`/api/auth`, userData)
    .then(result => {
      const { token } = result.data;
      const decoded = jwt_decode(token);
      setAuthToken(decoded);
      localStorage.setItem("token", token);
      dispatch({ type: USER_LOGIN, payload: result.data });
    })
    .catch(error => {
      dispatch({ type: GET_ERRORS, payload: error.response.data.msg });
      console.log(error);
    });
};
