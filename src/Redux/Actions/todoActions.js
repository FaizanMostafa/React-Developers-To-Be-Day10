import { ADD_TODO, DELETE_TODO } from "../Constants";

const addTodo = (data) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TODO,
      payload: data
    });
  };
};

export { addTodo };
