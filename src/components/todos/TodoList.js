import { List, ListItem, Paper } from "@material-ui/core";
import React, { useContext } from "react";
import { TodosContext } from "../../contexts/TodosContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useContext(TodosContext);
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
            <TodoItem todo={todo} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
