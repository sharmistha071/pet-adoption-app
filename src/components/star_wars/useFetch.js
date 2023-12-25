import { useState, useEffect } from 'react'

const useFetch = (url) => {
  console.log('url', url)
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal
    setLoading(true)
    setResponse(null)
    setError(null)

    fetch(url, { signal })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false)
        setResponse(data)
      })
      .catch((error) => {
        setLoading(false)
        setError(error)
      })

    // Cleanup function
    return () => {
      console.log('clean up function.....')
      controller.abort()
    }
  }, [])

  return { response, loading, error }
}

export default useFetch
