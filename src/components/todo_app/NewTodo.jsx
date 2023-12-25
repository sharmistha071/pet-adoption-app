import { useState, memo } from 'react'
import useTodos from './useTodos'

const NewTodo = memo(({ handleAddTodo }) => {
  const [person, setPerson] = useState('')
  const [reason, setReason] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    handleAddTodo({ person, reason })
  }
  console.log('rendering new todo')

  return (
    <div>
      <input
        type="text"
        placeholder="person"
        onChange={(event) => setPerson(event.target.value)}
      />
      <input
        type="text"
        placeholder="reason"
        onChange={(event) => setReason(event.target.value)}
      />
      <input type="submit" onClick={handleSubmit} />
    </div>
  )
})

export default NewTodo
