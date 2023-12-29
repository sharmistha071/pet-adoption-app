import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import CharacterList from './CharacterList'
import Character from './Character'

import endpoint from './endpoint'
import useAPI from './useAPI'

const extractCharacters = (response) => (response && response.results) || []
const extractPlanets = (response) => (response && response.results) || []

const Home = () => {
  const url = `${endpoint}/people`
  const planetsUrl = `${endpoint}/planets`

  const { state, fetchData } = useAPI(url, 'people', extractCharacters)

  const { people } = state
  const { loading, items: characters, error } = people

  const { state: planetState, fetchData: fetchPlanetData } = useAPI(
    planetsUrl,
    'planet',
    extractPlanets
  )
  const { planet } = planetState
  const { loading: loadingPlanets, items: planets, error: planetError } = planet

  useEffect(() => {
    fetchData()
    fetchPlanetData()
  }, [])

  return (
    <main
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}
      >
        <section className="sidebar">
          <h2>Star Wars People</h2>
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
      </div>
      <section>
        <h2>Star Wars Planets</h2>
        {loadingPlanets ? (
          <p>Fetching Star Wars planets...</p>
        ) : (
          <CharacterList characters={planets} />
        )}
      </section>
    </main>
  )
}

export default Home
