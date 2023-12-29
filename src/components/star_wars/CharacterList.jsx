import CharacterListItem from './CharacterListItem'

const CharacterList = ({ characters = [] }) => {
  return (
    <section className="CharacterList">
      {characters.map((character, index) => (
        <CharacterListItem
          key={character.url}
          character={character}
          id={index + 1}
        />
      ))}
    </section>
  )
}

export default CharacterList
