import { Link } from 'react-router-dom'
import useFetch from './useFetch'

const CharacterListItem = ({ character, id }) => {
  const { url, name } = character
  return (
    <article className="CharacterListItem">
      <Link
        className="CharacterListItemLink"
        to={`/characters/${id}`}
        state={character}
      >
        {name}
      </Link>
    </article>
  )
}
export default CharacterListItem
