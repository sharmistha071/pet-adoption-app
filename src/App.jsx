import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'

import SearchBox from './components/SearchBox'
import List from './components/List'

const App = () => {
  const [petList, setPetList] = useState([])

  return (
    <div>
      <h1>Adopt me</h1>
      <SearchBox setPetList={setPetList} />
      <List pets={petList} />
    </div>
  )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
