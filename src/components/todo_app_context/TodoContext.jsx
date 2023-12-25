import { v4 as uuidv4 } from 'uuid'

import {
  useState,
  useEffect,
  useReducer,
  useCallback,
  createContext,
} from 'react'
import initialState from './todos'

const TODO_LOAD = 'TODO_LOAD'
const TODO_ADD = 'TODO_ADD'
const TODO_TOGGOLE = 'TODO_TOGGLE'

const reducer = (state, action) => {
  switch (action.type) {
    case TODO_LOAD:
      return [...state, ...action.payload]
    case TODO_ADD:
      return [action.payload, ...state]
    case TODO_TOGGOLE:
      let newItems = state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            completed: !item.completed,
          }
        } else return item
      })
      return newItems
    default:
      return state
  }
}
export const TodoContext = createContext()

const TodoContextProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, [])

  useEffect(() => {
    dispatch({
      type: TODO_LOAD,
      payload: initialState,
    })
  }, [])

  const handleAddTodo = useCallback(
    (todo) => {
      console.log('calling add todo')
      const newTodo = {
        id: uuidv4(),
        person: todo.person,
        reason: todo.reason,
        completed: false,
      }
      dispatch({
        type: TODO_ADD,
        payload: newTodo,
      })
    },
    [dispatch]
  )
  const handleToggoleTodo = useCallback(
    (id) => {
      let newTodos = todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: event.target.checked,
          }
        } else {
          return todo
        }
      })
      dispatch({
        type: TODO_TOGGOLE,
        payload: { id },
      })
    },
    [dispatch]
  )

  const value = { todos, handleAddTodo, handleToggoleTodo }

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}

export default TodoContextProvider
