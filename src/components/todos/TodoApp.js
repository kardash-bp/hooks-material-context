import React from "react";
import { TodosProvider } from "../../contexts/TodosContext";
import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
const TodoApp = () => {
  return (
    <div>
      <Grid container justifyContent="center" style={{ marginTop: "2rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodosProvider>
            <TodoForm />
            <TodoList />
          </TodosProvider>
        </Grid>
      </Grid>
    </div>
  );
};

export default TodoApp;
