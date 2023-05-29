import { useState } from "react"
import Form from './components/Form';
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([])
  console.log(todos);

  // add todo
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const removeTodo = (todoIndex) => {
     const todosCopy = [...todos]

     todosCopy.splice(todoIndex, 1)
     setTodos(todosCopy)
  }

  return ( 
  <>
  <div className="bg-slate-900 ">
  <Form addTodo={addTodo} />
  <TodoList todos={todos} removeTodo={removeTodo} />
  </div>
  </>
  )
}

export default App