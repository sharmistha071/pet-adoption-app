import { useState, useEffect } from 'react'
import CharacterList from './CharacterList'
import endpoint from './endpoint'

const Application = () => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setCharacters([])
    setError(null)

    fetch(`${endpoint}/people`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false)
        console.log('data', data)
        setCharacters(data.results)
      })
      .catch((error) => {
        console.log('error', error)
        setLoading(false)
        setError(error)
      })
  }, [])

  return (
    <div>
      <header>
        <h1>Star wars character</h1>
      </header>
      <main>
        <section className="sidebar">
          {loading ? (
            <p>Loading.....</p>
          ) : (
            <CharacterList characters={characters} />
          )}
          {error && <p>{error.message}</p>}
        </section>
      </main>
    </div>
  )
}
export default Application
