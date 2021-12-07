import React, { createContext, useReducer } from "react";
import todoReducer from "../reducers/todoReducer";
const defaultTodos = [
  { id: 1, task: "Clean Fishtank", completed: false },
  { id: 2, task: "Take a walk", completed: true },
  { id: 3, task: "Read a book", completed: false },
];
export const TodosContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodosContext.Provider>
  );
}
