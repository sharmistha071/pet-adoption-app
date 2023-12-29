import { useContext, useEffect } from 'react'

import { CentralStoreContext, actionTypes, actions } from './CentralStore'

const useAPI = (url, module, formatFunction) => {
  const { state, dispatch } = useContext(CentralStoreContext)
  const {
    fetchDataStart,
    fetchDataSuccess,
    fetchDataError,
    fetchSingleStart,
    fetchSingleSuccess,
    fetchSingleError,
  } = actions

  const fetchData = async () => {
    // dispatch({
    //   type: actionTypes.FETCH_START,
    // })
    dispatch(fetchDataStart(module))

    try {
      const response = await fetch(url)
      const data = await response.json()
      const formattedData = formatFunction(data)
      dispatch(fetchDataSuccess(module, formattedData))
    } catch (error) {
      console.log('error....', error)
      dispatch(fetchDataError(module, error.message))
    }
  }

  const fetchSingleItem = async () => {
    // dispatch(fetchSingleStart(module))
    try {
      const response = await fetch(url)
      const data = await response.json()
      const formattedData = formatFunction(data)
      dispatch(fetchSingleSuccess(module, formattedData))
    } catch (error) {
      // dispatch(fetchSingleError(module, error.message))
      console.log(error)
    }
  }

  return { state, fetchData, fetchSingleItem }
}
export default useAPI
