import { useRickMortyStore } from '../../../store';
import { Container, Title } from './ListEpisodes.style';

/**
 * Component used to show the Locations or Origins of a character
 * episode {
          name
          air_date
          episode
        }
 */
function ListPosition() {
  const selected = useRickMortyStore((state) => state.selected);
  return (
    <Container>
      <Title>Episodes</Title>
      <ul>
        {selected?.episode.map(({ episode, name, air_date }) => (
          <li key={episode}>
            {episode}- {name} - {air_date}
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default ListPosition;
