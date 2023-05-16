/* eslint-disable react/require-default-props */
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
  isSelected = false,
}: Partial<Omit<CharacterSmall, 'id'>> & {
  /**
   * Is the action triggered on clicking the Card
   */
  onClickHandler: () => void;
  /**
   * Is the boolean to identify if a card is selected
   */
  isSelected?: boolean;
}) {
  return (
    <CardWrapper
      cardWrapperType={
        isSelected ? CardWrapperEnum.selected : CardWrapperEnum.card
      }
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
