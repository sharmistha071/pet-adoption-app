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

  const { state, fetchData } = useAPI(url, extractCharacters)
  const { loading, peoples: characters, error } = state

  console.log(loading, characters, error)

  // const { state: planetState } = useAPI(planetsUrl, extractPlanets)

  useEffect(() => {
    fetchData()
  }, [])

  return (
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
  )
}

export default Home
