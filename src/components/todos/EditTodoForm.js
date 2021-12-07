import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import { TodosContext } from "../../contexts/TodosContext";
import useInput from "../../hooks/useInput";

const EditTodoForm = ({ todo, setIsEditing }) => {
const [value, reset, handleChange] = useInput(todo.task);
  const { dispatch } = useContext(TodosContext);

  return (
    <form
      style={{ margin: "1rem", width: "90%" }}
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "EDIT", id: todo.id, newTask: value });
        setIsEditing(false);
      }}
    >
      <TextField
        value={value}
        margin="normal"
        fullWidth
        autoFocus
        onBlur={() => setIsEditing(false)}
        onChange={handleChange}
      />
    </form>
  );
};

export default EditTodoForm;
