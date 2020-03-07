import axios from "axios";
import { GET_PROFILE, UPDATE_PROFILE } from "./actionTypes";

export const profileUser = () => dispatch => {
  axios
    .get(`/api/profile`)
    .then(result => {
      // console.log("====get profile", result.data);
      dispatch({ type: GET_PROFILE, payload: result.data });
    })
    .catch(err => {
      console.log(err);
    });
};

export const profileUpdate = data => dispatch => {
  axios.put(`/api/profile/me`, data).then(result => {
    // console.log("from action=======", result);
    dispatch({ type: UPDATE_PROFILE, payload: result.data });
  });
};
