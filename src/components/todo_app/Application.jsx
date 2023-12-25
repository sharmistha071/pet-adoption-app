import NewTodo from './NewTodo'
import TodoList from './TodoList'
import useTodos from './useTodos'

const Application = () => {
  const { todos, handleAddTodo, handleToggoleTodo } = useTodos()

  return (
    <>
      <NewTodo handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} handleToggoleTodo={handleToggoleTodo} />
    </>
  )
}

export default Application
