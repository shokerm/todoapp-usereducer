import { FormEvent, useReducer, useState } from "react";
import Todo from "./Todo";
import { Action, TodoType } from "./types/types";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
  UPDATE_TODO: "update-todo",
};
function reducer(todos: TodoType[], action: Action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo: any) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo: TodoType) => todo.id !== action.payload.id);

    case ACTIONS.UPDATE_TODO:
      return todos.map((todo: any) => {
        if (todo.id === action.payload.id) {
          console.log("moshe");

          return { ...todo, name: "Updated!" };
        }
        return todo;
      });
    default:
      return todos;
  }
}

function newTodo(name?: string) {
  return { id: Date.now(), name: name, complete: false };
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }

  return (
    <div>
      <form style={{ textAlign: "center" }} onSubmit={handleSubmit}>
        <h3>Todo List:</h3>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>

      {todos?.map((todo: TodoType) => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </div>
  );
}

export default App;
