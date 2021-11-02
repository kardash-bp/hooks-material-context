import { Button, Paper, TextField } from "@material-ui/core";
import React from "react";
import useInput from "../hooks/useInput";

const TodoForm = ({ cb }) => {
  const [value, reset, bind] = useInput("");
  return (
    <form
      style={{ margin: "1rem 0" }}
      onSubmit={(e) => {
        e.preventDefault();
        if (!value) return;
        cb(value);
        reset();
      }}
    >
      <Paper style={{ padding: "1rem" }}>
        <TextField {...bind} margin="normal" label="Add New Todo" fullWidth />
        <Button type="submit">Add</Button>
      </Paper>
    </form>
  );
};

export default TodoForm;
