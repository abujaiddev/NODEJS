import { GET_PROFILE, UPDATE_PROFILE } from "../actions/actionTypes";

const initialState = {
  profile: []
};
export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload
      };
    case UPDATE_PROFILE: {
      return {
        ...state,
        profile: action.payload
        // profile: state.profile.map(x =>
        //   x._id == action.payload._id ? action.payload : x
        // )
      };
    }
    default:
      return state;
  }
}
