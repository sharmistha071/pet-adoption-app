import { createContext, useReducer } from 'react'

const initialState = {
  loading: false,
  peoples: [],
  // planets: [],
  singleItem: {},
  error: null,
}

export const actionTypes = {
  FETCH_START: 'FETCH_START',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_ERROR: 'FETCH_ERROR',
  FETCH_SINGLE_ITEM: 'FETCH_SINGLE_ITEM',
}

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FETCH_START:
      return {
        ...state,
        loading: true,
      }
    case actionTypes.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        peoples: action.payload,
      }
    case actionTypes.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        peoples: [],
        error: action.payload,
      }
    case actionTypes.FETCH_SINGLE_ITEM:
      console.log({
        ...state,
        loading: false,
        singleItem: action.payload,
      })
      return {
        ...state,
        loading: false,
        singleItem: action.payload,
      }
    default:
      return state
  }
}

const useThunkReducer = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const enhancedReducer = (action) => {
    if (typeof action === 'function') {
      return action(dispatch)
    } else return dispatch(action)
  }
  return [state, enhancedReducer]
}

export const CentralStoreContext = createContext()

const CentralStoreProvider = ({ children }) => {
  const [state, dispatch] = useThunkReducer(reducer, initialState)
  return (
    <CentralStoreContext.Provider value={{ state, dispatch }}>
      {children}
    </CentralStoreContext.Provider>
  )
}
export default CentralStoreProvider
