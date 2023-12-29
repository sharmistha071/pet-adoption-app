import { useState, useEffect } from 'react'
import { Link, BrowserRouter as Route, Outlet } from 'react-router-dom'

import CentralStoreProvider from './CentralStore'

import Home from './Home'

const Application = () => {
  return (
    <CentralStoreProvider>
      <header>
        <h1>Star wars character</h1>
      </header>
      <Home />
    </CentralStoreProvider>
  )
}
export default Application
