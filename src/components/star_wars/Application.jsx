import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import CharacterList from './CharacterList'
import endpoint from './endpoint'
import useFetch from './useFetch'

const Application = () => {
  const url = `${endpoint}/people`

  const { response, loading, error } = useFetch(url)
  console.log('response', response)
  const characters = (response && response.results) || []

  return (
    <div>
      <header>
        <h1>Star wars character</h1>
      </header>
      <main>
        <Link to={`/details/1`} className="pet">
          <button>Click me</button>
        </Link>
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
