import { useState, useEffect } from 'react'
const localCache = {}

const useBreedList = (animal) => {
  const [breedList, setBreedList] = useState([])
  const [status, setStatus] = useState('unloaded')
  console.log('animal.....', animal)

  useEffect(() => {
    console.log('useeffect running animal.....', animal)
    if (!animal) {
      setBreedList([])
    } else if (localCache[animal]) {
      setBreedList(localCache[animal])
    } else {
      requestBreedList()
    }

    async function requestBreedList() {
      setBreedList([])
      setStatus('loading')
      const url = `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      const res = await fetch(url)
      const data = await res.json()
      localCache[animal] = data.breeds || []
      console.log(data, data.breeds)
      setBreedList(localCache[animal])
      setStatus('loaded')
    }
  }, [animal])

  return { breedList, status }
}

export default useBreedList
