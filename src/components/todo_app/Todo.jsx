import { memo } from 'react'
import useTodos from './useTodos'

const Todo = memo(({ todo, handleToggoleTodo }) => {
  return (
    <article className="todo-item">
      <h3>{todo.person}</h3>
      <p>{todo.reason}</p>
      <div>
        <label></label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(event) => handleToggoleTodo(todo.id)}
        />{' '}
        Completed
      </div>
    </article>
  )
})

export default Todo
