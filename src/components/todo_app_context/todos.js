import { v4 as uuidv4 } from 'uuid'

// This is some dummy data.
const initialState = [
  {
    id: uuidv4(),
    person: 'todo one',
    reason: 'Parked too close to me in the parking lot',
    completed: false,
  },
  {
    id: uuidv4(),
    person: 'todo one',
    reason: 'Did not brew another pot of coffee after drinking the last cup',
    completed: false,
  },
  {
    id: uuidv4(),
    person: 'todo one',
    reason: 'Failed to wish me a happy birthday but ate my cake',
    completed: false,
  },
  {
    id: uuidv4(),
    person: 'todo one',
    reason: 'Generally obnoxious and unrepentant about that fact',
    completed: true,
  },
  {
    id: uuidv4(),
    person: 'todo one',
    reason: 'Cut me in line at Safeway and then made eye contact',
    completed: false,
  },
  {
    id: uuidv4(),
    person: 'todo one',
    reason: 'Ate the last slice of pizza and left the box out',
    completed: false,
  },
  {
    id: uuidv4(),
    person: 'todo one',
    reason: 'Brought "paper products" to a potluck',
    completed: false,
  },
  {
    id: uuidv4(),
    person: 'todo one',
    reason: 'Talked over me when I was telling a story',
    completed: false,
  },
  {
    id: uuidv4(),
    person: 'todo one',
    reason: 'Changed my playlist as soon as I left the room for 30 seconds',
    completed: false,
  },
  {
    id: uuidv4(),
    person: 'todo one',
    reason: 'Spoiled the plot line for Avengers: Endgame',
    completed: false,
  },
  {
    id: uuidv4(),
    person: 'todo one',
    reason: 'Ate all of the vegan ham leftovers despite being labelled',
    completed: false,
  },
]

export default initialState
