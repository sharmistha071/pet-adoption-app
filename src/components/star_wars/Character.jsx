import { useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import useFetch from './useFetch'
import endpoint from './endpoint'

const storeInfo = (response) => {
  console.log('storeInfo', response)
  return (response && response) || {}
}

const CharacterView = () => {
  const { id } = useParams()
  const url = `${endpoint}/people/${id}/`
  const { state, setActiveItem } = useFetch(url, storeInfo)
  const { loading, results, error, activePeople: character } = state

  useEffect(() => {
    setActiveItem(id)
  }, [id])

  console.log('response...', loading, results, error, character)

  return (
    <section className="CharacterView">
      <h2>{character?.name}</h2>
      <ul className="CharacterDetails">
        <li>
          <strong>Birth Year</strong>: {character.birth_year || ''}
        </li>
        <li>
          <strong>Eye Color</strong>: {character.eye_color || ''}
        </li>
        <li>
          <strong>Gender</strong>: {character.gender || ''}
        </li>
        <li>
          <strong>Hair Color</strong>: {character.hair_color || ''}
        </li>
        <li>
          <strong>Heigh</strong>: {character.height || ''}
        </li>
        <li>
          <strong>Mass</strong>: {character.mass || ''}
        </li>
        <li>
          <strong>Skin Color</strong>: {character.skin_color || ''}
        </li>
      </ul>
    </section>
  )
}

export default CharacterView
