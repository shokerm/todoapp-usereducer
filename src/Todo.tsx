import { ACTIONS } from "./App"

function Todo({todo,dispatch}:any) {

  return (
    <div className="todo">
<span style={{color: todo.complete ? '#ff00009e'  : 'aliceblue  ',textDecoration: todo.complete ? 'line-through':'none'}}>{todo.name}</span>
<div>
<button onClick={()=>dispatch({type:ACTIONS.TOGGLE_TODO ,payload:{id:todo.id}})}>Complete</button>
<button onClick={()=>dispatch({type:ACTIONS.DELETE_TODO ,payload:{id:todo.id}})}>Delete</button>
</div>
    </div>
    )
    }

export default Todo

