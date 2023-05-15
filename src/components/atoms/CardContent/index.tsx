import {
  CardContainer,
  Image,
  Title,
  SubTitle,
  StatusIcon,
} from './CardContent.styles.jsx';

import { CharacterSmall } from '../../../types/Character.js';

/**
 * Component that contains the information of a Character
 * inside the Gallery of characters
 */
function CardContent({
  name = 'No Character',
  image,
  status,
  species,
}: Partial<Omit<CharacterSmall, 'id'>>) {
  return (
    <CardContainer>
      <Image
        width="140"
        alt={name}
        src={image || '../../../assets/rick-morty.svg'}
      />
      <Title>{name}</Title>
      <SubTitle>
        <StatusIcon status={status} />
        {status} - {species}
      </SubTitle>
    </CardContainer>
  );
}

export default CardContent;
