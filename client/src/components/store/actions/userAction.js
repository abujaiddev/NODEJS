import axios from "axios";

export const addressUpdate = () => dispatch => {
  axios
    .put(`/api/userAddress`)
    .then()
    .catch();
};
