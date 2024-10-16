import { useState } from "react"
import { useGetTodoByIDQuery,  /*useGetTodosQuery*/ } from "./store/apis/todosApi"

export const TodoApp = () => {

    const [todoId, setTodoId] = useState(1)

    // const {data: todos = [], isLoading} = useGetTodosQuery()

    const {data: todo, isLoading} = useGetTodoByIDQuery(todoId)
    
    const nexTodo = () => {
        setTodoId(todoId + 1)
    }

    const PrevTodo = () => {
        todoId != 1 && setTodoId(todoId - 1) 
    }

  return (
    <>
        <h1>ToDo - RTK Query</h1>
        <hr />
        <h4>isLoading: {isLoading ? 'True': 'False'}</h4>

        <pre>{JSON.stringify(todo)}</pre>

        <button
            onClick={() => PrevTodo()}
         >
            Prev ToDo
        </button>

        <button
            onClick={() => nexTodo()}
        >
            Next ToDo
        </button>

        {/* <ul>
            {todos.map( todo => (
                <li key = {todo.id}>
                   <strong>{todo.completed ? '✅' : '❌'}</strong> {todo.title}
                </li>
            ))}
        </ul>

        <button>
            Next ToDo
        </button> */}
    </>
  )
}
