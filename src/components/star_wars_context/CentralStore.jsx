import { createContext, useReducer } from 'react'

const initialState = {
  people: {
    loading: false,
    items: [],
    singleItem: {},
    error: null,
  },
  planet: {
    loading: false,
    items: [],
    singleItem: {},
    error: null,
  },
}

export const actionTypes = {
  FETCH_START: 'FETCH_START',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_ERROR: 'FETCH_ERROR',
  FETCH_SINGLE_START: 'FETCH_SINGLE_START',
  FETCH_SINGLE_SUCCESS: 'FETCH_SINGLE_SUCCESS',
  FETCH_SINGLE_ERROR: 'FETCH_SINGLE_ERROR',
  ADD_ITEM_START: 'ADD_ITEM_START',
  ADD_ITEM_SUCCESS: 'ADD_ITEM_SUCCESS',
  ADD_ITEM_ERROR: 'ADD_ITEM_ERROR',
  EDIT_ITEM_START: 'EDIT_ITEM_START',
  EDIT_ITEM_SUCCESS: 'EDIT_ITEM_SUCCESS',
  EDIT_ITEM_ERROR: 'EDIT_ITEM_ERROR',
}

export const actions = {
  fetchDataStart: (module) => ({
    type: actionTypes.FETCH_START,
    module,
  }),
  fetchDataSuccess: (module, payload) => ({
    type: actionTypes.FETCH_SUCCESS,
    module,
    payload,
  }),
  fetchDataError: (module) => ({
    type: actionTypes.FETCH_ERROR,
    module,
  }),
  fetchSingleStart: (module) => ({
    type: actionTypes.FETCH_SINGLE_START,
    module,
  }),
  fetchSingleSuccess: (module, payload) => ({
    type: actionTypes.FETCH_SINGLE_SUCCESS,
    module,
    payload,
  }),
  fetchSingleError: (module, payload) => ({
    type: actionTypes.FETCH_SINGLE_ERROR,
    module,
    payload,
  }),
  addItem: (module, payload) => ({
    type: actionTypes.ADD_ITEM,
    module,
    payload,
  }),
  editItem: (module, payload) => ({
    type: actionTypes.EDIT_ITEM,
    module,
    payload,
  }),
}

const reducer = (state, action) => {
  const { type, module, payload } = action
  switch (type) {
    case actionTypes.FETCH_START:
    case actionTypes.FETCH_SINGLE_START:
    case actionTypes.ADD_ITEM_START:
    case actionTypes.EDIT_ITEM_START:
      return {
        ...state,
        [module]: {
          ...state[module],
          loading: true,
        },
      }
    case actionTypes.FETCH_SUCCESS:
      return {
        ...state,
        [module]: {
          ...state[module],
          loading: false,
          items: payload,
        },
      }
    case actionTypes.FETCH_SINGLE_SUCCESS:
      return {
        ...state,
        [module]: {
          ...state[module],
          loading: false,
          singleItem: payload,
        },
      }
    case actionTypes.FETCH_ERROR:
    case actionTypes.FETCH_SINGLE_ERROR:
    case actionTypes.ADD_ITEM_ERROR:
    case actionTypes.EDIT_ITEM_ERROR:
      return {
        ...state,
        [module]: {
          ...state[module],
          loading: false,
          peoples: [],
          error: payload,
        },
      }
    case actionTypes.ADD_ITEM_SUCCESS:
      return {
        ...state,
        [module]: {
          ...state[module],
          loading: false,
          items: [...state[module].items, payload],
          error: null,
        },
      }
    case actionTypes.EDIT_ITEM_SUCCESS:
      // Implement logic to update the item in the array
      return {
        ...state,
        [module]: {
          ...state[module],
          loading: false,
          items: updatedItemsArray,
          error: null,
        },
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
