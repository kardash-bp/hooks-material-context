import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import useTodos from "../hooks/useTodos";
const TodoApp = () => {
  const initialState = [
    { id: 1, task: "Clean Fishtank", completed: false },
    { id: 2, task: "Take a walk", completed: true },
    { id: 3, task: "Read a book", completed: false },
  ];

  const { todos, addTodo, removeTodo, toggleTodo, editTodo } =
    useTodos(initialState);

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
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
    </Paper>
  );
};

export default TodoApp;
