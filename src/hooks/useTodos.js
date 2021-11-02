import { nanoid } from "nanoid";
import useLocalStorage from "./useLocalStorageState";

const useTodos = (initialTodos) => {
  const [todos, setTodos] = useLocalStorage("todos", initialTodos);
  return {
    todos,
    addTodo: (newTodo) =>
      setTodos([...todos, { id: nanoid(), task: newTodo, completed: false }]),
    removeTodo: (todoId) =>
      setTodos(todos.filter((todo) => todo.id !== todoId)),
    toggleTodo: (todoId) => {
      const newArr = todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos([...newArr]);
    },
    editTodo: (todo) => {
      console.log("edit run");
      const newArr = todos.map((t) =>
        t.id === todo.id ? { ...t, task: todo.task } : t
      );
      setTodos([...newArr]);
    },
  };
};
export default useTodos;
