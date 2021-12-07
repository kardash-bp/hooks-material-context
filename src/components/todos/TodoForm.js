import { Button, Paper, TextField } from "@material-ui/core";
import React, { useContext } from "react";
import { TodosContext } from "../../contexts/TodosContext";
import useInput from "../../hooks/useInput";

const TodoForm = () => {
  const [value, reset, handleChange] = useInput("");
  const { dispatch } = useContext(TodosContext);
  console.log("todo form render");
  return (
    <form
      style={{ margin: "1rem 0" }}
      onSubmit={(e) => {
        e.preventDefault();
        if (!value) return;
        dispatch({ type: "ADD", task: value });
        reset();
      }}
    >
      <Paper>
        <TextField
          value={value}
          margin="normal"
          label="Add New Todo"
          fullWidth
          onChange={handleChange}
        />
        <Button type="submit">Add</Button>
      </Paper>
    </form>
  );
};

export default TodoForm;
