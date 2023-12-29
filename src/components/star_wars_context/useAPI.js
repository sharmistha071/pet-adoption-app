import { useContext, useEffect } from 'react'

import { CentralStoreContext, actionTypes } from './CentralStore'

const useAPI = (url, formatFunction) => {
  const { state, dispatch } = useContext(CentralStoreContext)

  const fetchData = async () => {
    dispatch({
      type: actionTypes.FETCH_START,
    })

    try {
      const response = await fetch(url)
      const data = await response.json()
      const formattedData = formatFunction(data)
      dispatch({
        type: actionTypes.FETCH_SUCCESS,
        payload: formattedData,
      })
    } catch (error) {
      console.log('error....', error)
      dispatch({
        type: actionTypes.FETCH_ERROR,
      })
    }

    fetchAPI()
  }

  const fetchSingleItem = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      const formattedData = formatFunction(data)
      dispatch({
        type: actionTypes.FETCH_SINGLE_ITEM,
        payload: formattedData,
      })
    } catch (error) {
      console.log(error)
    }
  }

  return { state, fetchData, fetchSingleItem }
}
export default useAPI
