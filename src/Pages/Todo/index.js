import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../../Redux/Actions/todoActions";

const Todo = (props) => {
  const [todoMessage, setTodoMessage] = useState("");

  const handleAddTodo = () => {
    let todo = {
      id: 1,
      message: todoMessage
    };
    props.addTodo(todo);
  };

  return (
    <div>
      <input
        value={todoMessage}
        onChange={(e) => setTodoMessage(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      {props.todos.length > 0 &&
        props.todos.map((todo) => <p>{todo.message}</p>)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todoReducer.todos,
    todoStatus: state.todoReducer.todoStatus
  };
};

export default connect(mapStateToProps, {
  addTodo
})(Todo);
