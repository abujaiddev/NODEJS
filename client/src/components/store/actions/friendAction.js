import axios from "axios";
import { FRIEND_REQUEST } from "../actions/actionTypes";

export const friendRequest = id => dispatch => {
  axios
    .post(`${"/api/friendRequest/"}${id}`)
    .then(result => {
      //   console.log(result);
      dispatch({ type: FRIEND_REQUEST, payload: result.data });
    })
    .catch(err => console.log(err));
};
