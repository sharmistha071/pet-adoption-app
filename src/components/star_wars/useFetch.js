import { useState, useEffect, useReducer } from 'react'
import initalState from './state'

const _LOADING = 'PEOPLE_LOADING'
const _RESPONSE_COMPLETE = 'PEOPLE_RESPONSE_COMPLETE'
const _ERROR = 'PEOPLE_ERROR'
const _ACTIVE_PEOPLE_RESPONSE = 'ACTIVE_PEOPLE_RESPONSE'

const fetchReducer = (state, action) => {
  console.log('state', state)
  switch (action.type) {
    case _LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case _RESPONSE_COMPLETE:
      return {
        ...state,
        loading: false,
        results: action.payload.response,
        error: null,
      }
    case _ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      }
    case _ACTIVE_PEOPLE_RESPONSE:
      return {
        ...state,
        activePeople: action.payload.response,
      }
    default:
      return state
  }
}

const useFetch = (url, extractData) => {
  const [state, dispatch] = useReducer(fetchReducer, initalState)

  // useEffect(() => {
  //   const controller = new AbortController()

  //   const fetchData = async () => {
  //     dispatch({
  //       type: _LOADING,
  //     })
  //     try {
  //       const response = await fetch(url, { signal: controller.signal })
  //       const data = await response.json()
  //       let formattedData = extractData(data)
  //       console.log('formattedData', formattedData)
  //       dispatch({
  //         type: _RESPONSE_COMPLETE,
  //         payload: {
  //           response: formattedData,
  //         },
  //       })
  //     } catch (error) {
  //       if (error.name === 'AbortError') {
  //         console.log('Fetch aborted due to component unmount or new request.')
  //       } else {
  //         dispatch({
  //           type: _ERROR,
  //           payload: {
  //             error: error,
  //           },
  //         })
  //       }
  //     }
  //   }

  //   fetchData()

  //   // Cleanup function
  //   return () => {
  //     console.log('clean up function.....')
  //     controller.abort()
  //   }
  // }, [url])

  const loadInitialData = async () => {
    console.log('checking if it calls')
    const controller = new AbortController()
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

  const fetchActiveItem = async (id) => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      let formattedData = extractData(data)
      dispatch({
        type: _ACTIVE_PEOPLE_RESPONSE,
        payload: {
          response: formattedData,
        },
      })
    } catch (err) {
      console.log('errrrrr', err)
    }
  }

  const setActiveItem = (id) => {
    console.log('calling this one', state)
    fetchActiveItem(id)
  }
  return { state, loadInitialData, setActiveItem }
}

export default useFetch
