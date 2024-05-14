import { useEffect, useState } from 'react'
import './App.css'
import { TodosProvider } from './context'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, {...todo}])
    console.log(todos)
  }

  const updateTodos = (id, message) => {
    setTodos((prevTodos) => prevTodos.map((currTodo) => currTodo.id === id ? { ...currTodo, todo:message} : currTodo ))
  }

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((currTodo) => currTodo.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos((prevTodos) => prevTodos.map((currTodo) => currTodo.id === id ? { ...currTodo, completed : !(currTodo.completed) }: currTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0)
      setTodos(todos)
  }, [])
  
  useEffect( () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0)
      setTodos(todos)
  }, [])


  return (
    <TodosProvider value={{todos, addTodo, updateTodos, deleteTodo, toggleTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodosProvider>
  )
}

export default App
