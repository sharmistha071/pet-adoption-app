import { useState, useEffect } from 'react'

const useFetch = (url, extractCharacters) => {
  console.log('url', url)
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

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

    const fetchData = async () => {
      setLoading(true)
      setResponse(null)
      setError(null)
      try {
        const response = await fetch(url, { signal })
        const data = await response.json()
        console.log('data.......', data, extractCharacters(data))
        let formattedData = extractCharacters(data)

        setLoading(false)
        setResponse(formattedData)
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
