import { ACTIONS } from "./App";

function Todo({ todo, dispatch }: any) {
  return (
    <div className="todo">
      <div
        style={{
          color: todo.complete ? "#ff00009e" : "aliceblue  ",
          textDecoration: todo.complete ? "line-through" : "none",
        }}
      >
        {todo.name}
      </div>
      <div>
        <button
          onClick={() =>
            dispatch({
              type: ACTIONS.TOGGLE_TODO,
              payload: { id: todo.id },
            })
          }
        >
          Complete
        </button>
        <button
          onClick={() =>
            dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
          }
        >
          Delete
        </button>
        <button
          onClick={() =>
            dispatch({
              type: ACTIONS.UPDATE_TODO,
              payload: { id: todo.id, name: todo.name },
            })
          }
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default Todo;
