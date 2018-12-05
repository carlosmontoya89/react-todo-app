import axios from "axios";
import { GET_TODO, DELETE_TODO, ADD_TODO, TODO_LOADING } from "./types";

export const getTodo = ()=> dispatch => {
  dispatch(setTodoLoading());
  axios.get('/api/user/get').then(res => dispatch({
      type: GET_TODO,
      payload: res.data
    }))
};

export const deleteTodo = (id) => dispatch => {
  axios.delete(`/api/user/${id}`).then(res => dispatch({
    type: DELETE_TODO,
    payload: id
  }))
};

export const addTodo = todo => dispatch => {
  axios.post('/api/user/', todo).then(res => dispatch({
    type: ADD_TODO,
    payload: res.data
  }))
};

export const setTodoLoading = () => {
  return {
    type: TODO_LOADING
  }
};