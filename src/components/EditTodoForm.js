import { TextField } from "@material-ui/core";
import React from "react";
import useInput from "../hooks/useInput";

const EditTodoForm = ({ todo, cb, setIsEditing }) => {
  const [value, reset, bind] = useInput(todo.task);
  return (
    <form
      style={{ margin: "1rem", width: "90%" }}
      onSubmit={(e) => {
        e.preventDefault();
        cb({ ...todo, task: value });
        reset();
      }}
    >
      <TextField
        {...bind}
        margin="normal"
        fullWidth
        autoFocus
        onBlur={() => setIsEditing(false)}
      />
    </form>
  );
};

export default EditTodoForm;
