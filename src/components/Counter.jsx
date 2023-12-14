import { useState, useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const Counter = ({ max, step }) => {
  const [count, setCount] = useLocalStorage(0, 'count')

  const increment = () => {
    setCount((prevCount) => {
      if (prevCount >= max) return prevCount
      return prevCount + step
    })
  }
  const decrement = () => {
    setCount((prevCount) => prevCount - 1)
  }
  const reset = () => {
    setCount(0)
  }

  // useEffect(() => {
  //   let i = 0
  //   let intervalId = setInterval(() => {
  //     console.log('hello', i++)
  //   }, 1000)
  //   return () => {
  //     clearInterval(intervalId)
  //   }
  // }, [])

  return (
    <>
      <p>Counter {count}</p>
      <div style={{ display: 'flex' }}>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  )
}
export default Counter
