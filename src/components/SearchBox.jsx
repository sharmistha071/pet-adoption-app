import { useState, useEffect, useContext } from 'react'

import Pet from './Pet'
import List from './List'
import useBreedList from '../hooks/useBreedList'
import AdoptedPetContext from '../AdoptedPetContext'

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit']

const SearchBox = ({ setPetList }) => {
  const [location, setLocation] = useState('')
  const [animal, setAnimal] = useState('')
  const [breed, setBreed] = useState('')
  const { breedList: breeds } = useBreedList(animal)
  const [adoptedPet] = useContext(AdoptedPetContext)

  useEffect(() => {
    requestPets()
  }, [])

  async function requestPets() {
    const url = `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    try {
      const res = await fetch(url)
      const data = await res.json()
      setPetList(data.pets)
    } catch (error) {
      // setting error component
    }
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          requestPets()
        }}
      >
        {adoptedPet ? (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        ) : null}
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
          />
        </label>
        <label htmlFor="location">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value)
              setBreed('')
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
          <select
            id="breed"
            value={breed}
            disabled={breeds?.length === 0}
            onChange={(e) => setBreed(e.target.value)}
          >
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

export default SearchBox
