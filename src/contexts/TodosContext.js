import React, { createContext } from "react";
import useTodos from "../hooks/useTodos";
const defaultTodos = [
  { id: 1, task: "Clean Fishtank", completed: false },
  { id: 2, task: "Take a walk", completed: true },
  { id: 3, task: "Read a book", completed: false },
];
export const TodosContext = createContext();

export function TodosProvider(props) {
  const todosStuff = useTodos(defaultTodos);
  return (
    <TodosContext.Provider value={todosStuff}>
      {props.children}
    </TodosContext.Provider>
  );
}
