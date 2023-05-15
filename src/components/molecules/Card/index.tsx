import CardWrapper, { CardWrapperEnum } from '../../atoms/CardWrapper';
import CardContent from '../../atoms/CardContent';

import { CharacterSmall } from '../../../types/Character.js';
/**
 * Component used to create the cards inside the gallery
 */
function Card({
  name,
  image,
  status,
  species,
}: Partial<Omit<CharacterSmall, 'id'>>) {
  return (
    <CardWrapper cardWrapperType={CardWrapperEnum.card}>
      <CardContent
        name={name}
        image={image}
        status={status}
        species={species}
      />
    </CardWrapper>
  );
}

export default Card;
