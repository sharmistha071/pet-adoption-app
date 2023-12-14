import { useState } from 'react'

import SearchBox from './SearchBox'
import SearchBox2 from './SearchBox2'
import List from './List'
import Counter from './Counter'

const Home = () => {
  const [petList, setPetList] = useState([])
  return (
    <>
      <Counter max={20} step={5} />
      <SearchBox setPetList={setPetList} />
      <List pets={petList} />
    </>
  )
}
export default Home
