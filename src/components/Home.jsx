import { useState } from 'react'

import SearchBox from './SearchBox'
import SearchBox2 from './SearchBox2'
import List from './List'
import Counter from './Counter'
import Board from './TicTacToe'
import ProductList from './ProductList'

const PRODUCTS = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
]

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
