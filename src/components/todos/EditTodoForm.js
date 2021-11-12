import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import { TodosContext } from "../../contexts/TodosContext";
import useInput from "../../hooks/useInput";

const EditTodoForm = ({ todo, setIsEditing }) => {
  const { editTodo } = useContext(TodosContext);
  const [value, bind] = useInput(todo.task);
  console.log("edit todo form render");

  return (
    <form
      style={{ margin: "1rem", width: "90%" }}
      onSubmit={(e) => {
        e.preventDefault();
        editTodo({ ...todo, task: value });
        setIsEditing(false);
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
