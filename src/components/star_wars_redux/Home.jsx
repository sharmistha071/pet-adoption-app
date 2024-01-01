import { useState, useEffect } from 'react'

const Home = () => {
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
        {/* <section className="sidebar">
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
        </section> */}
      </div>
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
