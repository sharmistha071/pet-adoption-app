import { useState, useEffect } from 'react'

const useFetch = (url) => {
  console.log('url', url)
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setResponse(null)
    setError(null)
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false)
        setResponse(data)
      })
      .catch((error) => {
        setLoading(false)
        setError(error)
      })
  }, [])

  return { response, loading, error }
}

export default useFetch
