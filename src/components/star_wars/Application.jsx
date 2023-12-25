import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import CharacterList from './CharacterList'
import endpoint from './endpoint'
import useFetch from './useFetch'

const extractCharacters = (response) => (response && response.results) || []
const extractPlanets = (response) => (response && response.results) || []

const Application = () => {
  const url = `${endpoint}/people`
  const planetsUrl = `${endpoint}/planets`

  const {
    response: characters,
    loading,
    error,
  } = useFetch(url, extractCharacters)

  const {
    response: planets,
    loading: loadingPlanets,
    error: errorPlanets,
  } = useFetch(planetsUrl, extractPlanets)

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
        <section>
          <h2>Star Wars Planets</h2>
          {loadingPlanets ? (
            <p>Fetching Star Wars planets...</p>
          ) : (
            <CharacterList characters={planets} />
          )}
        </section>
      </main>
    </div>
  )
}
export default Application
