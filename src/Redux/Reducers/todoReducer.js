import { ADD_TODO, DELETE_TODO } from "../Constants";

const initialState = {
  todos: [],
  todoStatus: new Date()
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      let updatedTodos = state.todos;
      updatedTodos.push(action.payload);
      return {
        ...state,
        todos: updatedTodos,
        todoStatus: new Date()
      };
    }

    default:
      return state;
  }
}
