import React, { useState } from 'react'
import { useTodos } from '../context';

function TodoForm() {
    const [todo, setTodo] = useState('')
    const { addTodo } = useTodos()

    const add = (e) => {
        e.preventDefault()
        if(todo){
            addTodo({id: Date.now(), todo: todo, completed: false})
            setTodo('')
        }
    }


  return (
      <form onSubmit={add}  className="flex">
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
              Add
          </button>
      </form>
  );
}

export default TodoForm;