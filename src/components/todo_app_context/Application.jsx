import NewTodo from './NewTodo'
import TodoList from './TodoList'
import useTodos from './useTodos'
import TodoContextProvider from './TodoContext'

const Application = () => {
  return (
    <>
      <TodoContextProvider>
        <h1>todos application with contect API</h1>
        <h2>
          here the problem is prop drilling, we need to pass all the state and
          event handler function through the parents component, we can solve
          this issue using Context API.
        </h2>
        <NewTodo />
        <TodoList />
      </TodoContextProvider>
    </>
  )
}

export default Application
