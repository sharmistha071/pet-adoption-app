import { useState } from 'react'

import SearchBox from './SearchBox'
import SearchBox2 from './SearchBox2'
import List from './List'
import Counter from './Counter'
import Board from './TicTacToe'

const Home = () => {
  const [petList, setPetList] = useState([])
  return (
    <>
      <Board />
      <SearchBox setPetList={setPetList} />
      <List pets={petList} />
    </>
  )
}
export default Home
