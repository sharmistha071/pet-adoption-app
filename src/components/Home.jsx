import { useState } from 'react'

import SearchBox from './SearchBox'
import SearchBox2 from './SearchBox2'
import List from './List'

const Home = () => {
  const [petList, setPetList] = useState([])
  return (
    <>
      <SearchBox setPetList={setPetList} />
      <List pets={petList} />
    </>
  )
}
export default Home
