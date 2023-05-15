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
  /**
   * Is this the name of the Character
   */
  name = 'No Character',
  /**
   * Is this the image of the Character
   */
  image,
  /**
   * Is this the status of the Character (Dead, Alive)
   */
  status,
  /**
   * Is this the specie of the Character
   */
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
