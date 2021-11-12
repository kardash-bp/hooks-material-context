import React, { useState, useContext } from "react";
import {
  Checkbox,
  IconButton,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import EditTodoForm from "./EditTodoForm";
import { TodosContext } from "../../contexts/TodosContext";

const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { removeTodo, toggleTodo } = useContext(TodosContext);
  //console.log(todo);
  return isEditing ? (
    <EditTodoForm todo={todo} setIsEditing={setIsEditing} />
  ) : (
    <>
      <Checkbox
        checked={todo.completed}
        tabIndex={-1}
        onClick={() => toggleTodo(todo.id)}
      />
      <ListItemText
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.task}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label="Edit" onClick={() => setIsEditing(!isEditing)}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="Delete" onClick={() => removeTodo(todo.id)}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </>
  );
};

export default React.memo(TodoItem);
