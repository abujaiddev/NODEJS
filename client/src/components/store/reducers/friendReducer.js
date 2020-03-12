import { FRIEND_REQUEST } from "../actions/actionTypes";

const intialState = {
  friendRequest: []
};

export default function friendRequest(state = intialState, action) {
  switch (action.type) {
    case FRIEND_REQUEST:
      return {
        ...state,
        friendRequest: action.payload
      };
    default:
      return state;
  }
}
