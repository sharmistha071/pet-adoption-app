import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'

import Pet from './Pet'
import List from './List'
import useBreedList from '../hooks/useBreedList'
import fetchSearch from '../services/api_requests/fetchSearch'

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit']

const SearchBox2 = ({ setPetList }) => {
  const [requestParams, setRequestParams] = useState({
    location: '',
    animal: '',
    breed: '',
  })

  const [animal, setAnimal] = useState('')
  const { breedList: breeds } = useBreedList(animal)
  const { isPending, error, data } = useQuery({
    queryKey: ['details', requestParams],
    queryFn: fetchSearch,
  })

  useEffect(() => {
    if (!isPending && !error) {
      setPetList(data?.pets)
    }
  }, [isPending, error])

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const formData = new FormData(e.target)

          const obj = {
            animal: formData.get('animal') || '',
            breed: formData.get('breed') || '',
            location: formData.get('location') || '',
          }
          console.log('formdata...', obj)
          setRequestParams(obj)
        }}
      >
        <label htmlFor="location">
          Location
          <input id="location" name="location" placeholder="Location" />
        </label>
        <label htmlFor="location">
          Animal
          <select
            id="animal"
            name="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value)
            }}
          >
            <option></option>
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <label htmlFor="location">
          Breed
          <select id="breed" name="breed" disabled={breeds?.length === 0}>
            {breeds?.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SearchBox2
