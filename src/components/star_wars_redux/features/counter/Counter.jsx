import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

const Counter = () => {
  const counter = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <span>{counter}</span>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Counter
