import {
  Container,
  Title,
  Description,
  Info,
  Value,
} from './CharacterInfo.styles';
import {
  Image,
  SubTitle,
  StatusIcon,
} from '../../atoms/CardContent/CardContent.styles';
import Position from '../../atoms/Position';
import { useRickMortyStore } from '../../../store';

/**
 * Component used to show the selected character info
 */
function CharacterInfo() {
  const selected = useRickMortyStore((state) => state.selected);

  if (!selected) return null;

  return (
    <Container>
      <Title>{selected.name}</Title>
      <Image
        width="140"
        alt={selected.name}
        src={selected.image || '../../../assets/rick-morty.svg'}
      />
      <Description>
        <SubTitle>
          <StatusIcon status={selected.status} />
          {selected.status} - {selected.species}
        </SubTitle>
        <Info>
          Gender: <Value>{selected.gender}</Value>
        </Info>
        <Info>
          Type: <Value>{selected.type || '-'}</Value>
        </Info>
        <Position
          labelType="Location"
          name={selected.location?.name}
          type={selected.location?.type}
          dimension={selected.location?.dimension}
        />
        <Position
          labelType="Origin"
          name={selected.origin?.name}
          type={selected.origin?.type}
          dimension={selected.origin?.dimension}
        />
      </Description>
    </Container>
  );
}

export default CharacterInfo;
