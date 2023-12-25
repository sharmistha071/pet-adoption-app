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

const useFetch = (url, extractData) => {
  const [state, dispatch] = useReducer(fetchReducer, initalState)

  useEffect(() => {
    const controller = new AbortController()

    const fetchData = async () => {
      dispatch({
        type: _LOADING,
      })
      try {
        const response = await fetch(url, { signal: controller.signal })
        const data = await response.json()
        let formattedData = extractData(data)
        dispatch({
          type: _RESPONSE_COMPLETE,
          payload: {
            response: formattedData,
          },
        })
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('Fetch aborted due to component unmount or new request.')
        } else {
          dispatch({
            type: _ERROR,
            payload: {
              error: error,
            },
          })
        }
      }
    }
    fetchData()

    // Cleanup function
    return () => {
      console.log('clean up function.....')
      controller.abort()
    }
  }, [url])

  console.log('state', state)
  return state
}

export default useFetch
