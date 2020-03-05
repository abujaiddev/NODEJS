import axios from "axios";
import { GET_PROFILE } from "./actionTypes";

export const profileUser = () => dispatch => {
  axios
    .get(`/api/profile`)
    .then(result => {
      dispatch({ type: GET_PROFILE, payload: result.data });
    })
    .catch(err => {
      console.log(err);
    });
};
