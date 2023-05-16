import {
  Container,
  Title,
  Description,
  Info,
  Value,
} from './CharacterInfo.styles';
import { CharacterFull } from '../../../types/Character';
import {
  Image,
  SubTitle,
  StatusIcon,
} from '../../atoms/CardContent/CardContent.styles';
import Position from '../../atoms/Position';

/**
 * Component used for the 404 page and on loading
 */
function CharacterInfo({ characterInfo }: Omit<CharacterFull, 'episode'>) {
  const { name, image, status, species, type, gender, origin, location } =
    characterInfo;
  return (
    <Container>
      <Title>{name}</Title>
      <Image
        width="140"
        alt={name}
        src={image || '../../../assets/rick-morty.svg'}
      />
      <Description>
        <SubTitle>
          <StatusIcon status={status} />
          {status} - {species}
        </SubTitle>
        <Info>
          Gender: <Value>{gender}</Value>
        </Info>
        <Info>
          Type: <Value>{type || '-'}</Value>
        </Info>
        <Position
          labelType="Location"
          name={location?.name}
          type={location?.type}
          dimension={location?.dimension}
        />
        <Position
          labelType="Origin"
          name={origin?.name}
          type={origin?.type}
          dimension={origin?.dimension}
        />
      </Description>
    </Container>
  );
}

export default CharacterInfo;
