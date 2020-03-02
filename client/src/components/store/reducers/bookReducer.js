import { GET_BOOKS } from "../actions/actionTypes";
const initialState = {
  books: []
};

export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        books: action.payload
      };
    default:
      return state;
  }
}
