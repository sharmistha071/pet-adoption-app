import Todo from './Todo'

const TodoList = ({ todos, handleToggoleTodo }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} handleToggoleTodo={handleToggoleTodo} />
      ))}
    </div>
  )
}
export default TodoList
