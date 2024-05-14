import { createContext, useContext } from 'react'

const TodosContext = createContext({
    todos: [{
        id: 1,
        todo: '',
        completed: false
    }],
    addTodo: (todo) => {},
    updateTodos: (id, message) => {},
    deleteTodo: (id) => {},
    toggleTodo: (id) => {}
})

const useTodos = () => {
    return useContext(TodosContext)
}

const TodosProvider = TodosContext.Provider


export { TodosContext, TodosProvider, useTodos }