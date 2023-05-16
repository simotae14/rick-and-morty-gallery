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
  onClickHandler,
}: Partial<Omit<CharacterSmall, 'id'>> & {
  /**
   * Is the action triggered on clicking the Card
   */
  onClickHandler: () => void;
}) {
  return (
    <CardWrapper
      cardWrapperType={CardWrapperEnum.card}
      onClickHandler={onClickHandler}
    >
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
