import { useState, useEffect, useReducer } from 'react'
import initalState from './state'

const _LOADING = 'PEOPLE_LOADING'
const _RESPONSE_COMPLETE = 'PEOPLE_RESPONSE_COMPLETE'
const _ERROR = 'PEOPLE_ERROR'

const fetchReducer = (state, action) => {
  switch (action.type) {
    case _LOADING:
      return {
        loading: true,
        results: null,
        error: null,
      }
    case _RESPONSE_COMPLETE:
      return {
        loading: false,
        results: action.payload.response,
        error: null,
      }
    case _ERROR:
      return {
        loading: false,
        results: null,
        error: action.payload.error,
      }
    default:
      return state
  }
}

const fetchChracters = (url, controller, dispatch) => {
  dispatch({
    type: _LOADING,
  })
  fetch(url, { signal: controller.signal })
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: _RESPONSE_COMPLETE,
        payload: {
          response: data.results,
        },
      })
    })
    .catch((error) =>
      dispatch({
        type: _ERROR,
        payload: {
          error: error,
        },
      })
    )
}

const useThunkReducer = (reducer, initalState) => {
  const [state, dispatch] = useReducer(reducer, initalState)

  const enhancedDispatch = (action) => {
    console.log('action', action)
    if (typeof action === 'function') {
      action(dispatch)
    } else {
      dispatch(action)
    }
  }

  return [state, enhancedDispatch]
}

const useFetch = (url, extractData) => {
  const [state, dispatch] = useThunkReducer(fetchReducer, initalState)

  const controller = new AbortController()

  useEffect(() => {
    dispatch(() => fetchChracters(url, controller, dispatch))

    return () => {
      console.log('clean up function')
      controller.abort()
    }
  }, [])

  // console.log('state', state)
  return state
}

export default useFetch
