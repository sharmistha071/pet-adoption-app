import { useState, useEffect } from 'react'

const useFetch = (url, extractData) => {
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // fetch(url, { signal })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setLoading(false)
    //     setResponse(data)
    //   })
    //   .catch((error) => {
    //     setLoading(false)
    //     setError(error)
    //   })
    const controller = new AbortController()

    const fetchData = async () => {
      setLoading(true)
      setResponse(null)
      setError(null)
      try {
        const response = await fetch(url, { signal: controller.signal })
        const data = await response.json()
        let formattedData = extractData(data)
        setResponse(formattedData)
        setLoading(false)
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('Fetch aborted due to component unmount or new request.')
        } else {
          setLoading(false)
          setError(error)
        }
      }
    }
    fetchData()

    // Cleanup function
    return () => {
      console.log('clean up function.....')
      controller.abort()
    }
  }, [url])

  return { response, loading, error }
}

export default useFetch
