import { useState, useEffect } from 'react'
import { Link, BrowserRouter as Route, Outlet } from 'react-router-dom'

import CharacterList from './CharacterList'
import Character from './Character'
import endpoint from './endpoint'
import useFetch from './useFetch'

const extractCharacters = (response) => (response && response.results) || []
const extractPlanets = (response) => (response && response.results) || []

const Application = () => {
  const url = `${endpoint}/people`
  const planetsUrl = `${endpoint}/planets`

  const { state, loadInitialData } = useFetch(url, extractCharacters)

  console.log('state.....', state)

  const { loading, results: characters, error } = state

  const {
    loading: loadingPlanets,
    results: planets,
    error: errorPlanets,
  } = useFetch(planetsUrl, extractPlanets)

  useEffect(() => {
    loadInitialData()
  }, [])

  return (
    <div>
      <header>
        <h1>Star wars character</h1>
      </header>
      <main style={{ display: 'flex', justifyContent: 'space-between' }}>
        <section className="sidebar">
          {loading ? (
            <p>Loading.....</p>
          ) : (
            <CharacterList characters={characters} />
          )}
          {error && <p>{error.message}</p>}
        </section>
        <section>
          <Outlet />
        </section>
        {/* <section>
          <h2>Star Wars Planets</h2>
          {loadingPlanets ? (
            <p>Fetching Star Wars planets...</p>
          ) : (
            <CharacterList characters={planets} />
          )}
        </section> */}
      </main>
    </div>
  )
}
export default Application
