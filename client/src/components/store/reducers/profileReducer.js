import { GET_PROFILE } from "../actions/actionTypes";

const initialState = {
  profile: {}
};
export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload
      };
    default:
      return state;
  }
}
