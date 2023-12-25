import Character from './Character'

const CharacterList = ({ characters = [] }) => {
  return (
    <section className="CharacterList">
      {characters.map((character) => (
        <Character key={character.url} character={character} />
      ))}
    </section>
  )
}

export default CharacterList
