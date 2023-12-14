import { useState, useEffect } from 'react'

const useLocalStorage = (initialState, key) => {
  const get = () => {
    const count = JSON.parse(localStorage.getItem(key))
    console.log(typeof count, count)
    if (!count) return initialState
    return count
  }
  const [value, setValue] = useState(get())

  useEffect(() => {
    document.title = `Count : ${value}`
    localStorage.setItem(key, value)
  }, [value])

  return [value, setValue]
}
export default useLocalStorage
