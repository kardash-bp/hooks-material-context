import { List, ListItem, Paper } from "@material-ui/core";
import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, removeTodo, toggleTodo, editTodo }) => {
  if (todos.length === 0) return null;
  return (
    <Paper>
      <List>
        {todos.map((todo, idx) => (
          <ListItem
            style={{
              height: "64px",
              borderBottom:
                todos.length - 1 !== idx ? "1px solid lightgray" : null,
            }}
            key={todo.id}
          >
            <TodoItem
              todo={todo}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
