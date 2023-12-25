import { useContext } from 'react'

import Todo from './Todo'
import { TodoContext } from './TodoContext'

const TodoList = () => {
  const { todos, handleToggoleTodo } = useContext(TodoContext)
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} handleToggoleTodo={handleToggoleTodo} />
      ))}
    </div>
  )
}
export default TodoList
