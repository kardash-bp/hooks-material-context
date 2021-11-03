import React from "react";

import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import useTodos from "../../hooks/useTodos";
const TodoApp = () => {
  const initialState = [
    { id: 1, task: "Clean Fishtank", completed: false },
    { id: 2, task: "Take a walk", completed: true },
    { id: 3, task: "Read a book", completed: false },
  ];

  const { todos, addTodo, removeTodo, toggleTodo, editTodo } =
    useTodos(initialState);

  return (
    <div>
      <Grid container justifyContent="center" style={{ marginTop: "2rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm cb={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default TodoApp;
