import { GET_TODO, DELETE_TODO, ADD_TODO, TODO_LOADING } from "../actions/types";

const initialState = {
  customers: [],
  loading: false
};

const todoReducer = (state=initialState, action) => {
  switch (action.type) {
    case GET_TODO:
      return {
        ...state,
        customers: action.payload,
        loading: false
      };
    case DELETE_TODO:
      return {
        ...state,
        customers: state.customers.filter(item => item._id !== action.payload)
      };
    case ADD_TODO:
      return {
        ...state,
        customers: [action.payload, ...state.customers]
      };
    case TODO_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};

export default todoReducer;