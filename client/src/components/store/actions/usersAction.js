import { GET_USERS } from "../actions/actionTypes";
import axios from "axios";

export const getUsers = () => dispatch => {
  axios
    .get("/api/users")
    .then(result => {
      console.log(result);
      dispatch({ type: GET_USERS, payload: result.data });
    })
    .catch(err => console.log(err));
};
