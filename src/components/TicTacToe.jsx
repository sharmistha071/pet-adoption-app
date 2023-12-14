import { useState, useEffect } from 'react'

const Square = ({ value, handleClick }) => {
  return (
    <button style={{ width: '20px', height: '20px' }} onClick={handleClick}>
      {value}
    </button>
  )
}

const Board = () => {
  const [isX, setIsX] = useState(true)
  const [items, setItems] = useState(new Array(9).fill(''))

  let twoDOfItems = items?.reduce((acc, n, index) => {
    const row = Math.floor(index / 3)
    const col = index % 3
    if (!acc[row]) {
      acc[row] = []
    }
    acc[row][col] = items[index]
    return acc
  }, [])
  console.log('twoDOfItems......', twoDOfItems)

  const handleClick = (index) => {
    if (items[index] || calculateWinner(items)) return
    let newArray = items.slice()
    if (isX) {
      newArray[index] = 'X'
    } else {
      newArray[index] = 'O'
    }
    setIsX(!isX)
    setItems(newArray)
  }

  const calculateWinner = (squares) => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ]
    for (let i = 0; i < win.length; i++) {
      let [a, b, c] = win[i]
      if (
        squares[a] &&
        squares[b] &&
        squares[c] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a]
      }
    }
    return null
  }

  useEffect(() => {}, [])

  return (
    <>
      <div className="board-row">
        <Square value={items[0]} handleClick={() => handleClick(0)} />
        <Square value={items[1]} handleClick={() => handleClick(1)} />
        <Square value={items[2]} handleClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={items[3]} handleClick={() => handleClick(3)} />
        <Square value={items[4]} handleClick={() => handleClick(4)} />
        <Square value={items[5]} handleClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={items[6]} handleClick={() => handleClick(6)} />
        <Square value={items[7]} handleClick={() => handleClick(7)} />
        <Square value={items[8]} handleClick={() => handleClick(8)} />
      </div>
    </>
  )
}
export default Board
