import axios from "axios";
import { FRIEND_REQUEST } from "../actions/actionTypes";

export const friendRequest = id => dispatch => {
  axios
    .post(`${"/api/friendRequest/"}${id}`)
    .then(result => {
      dispatch({ type: FRIEND_REQUEST, payload: result.data });
    })
    .catch(err => console.log(err));
};

export const friendProfile = id => dispatch => {
  axios
    .get(`/api/friend/${id}`)
    .then(result => {
      console.log(dispatch);
    })
    .catch(err => {
      console.log(err);
    });
};
