import axios from "axios";
import { GET_BOOKS } from "../actions/actionTypes";

export const books = () => dispatch => {
  axios
    .get("/api/booksByUser")
    .then(result => {
      dispatch({ type: GET_BOOKS, payload: result.data });
    })
    .catch(err => {
      console.log(err);
    });
};
