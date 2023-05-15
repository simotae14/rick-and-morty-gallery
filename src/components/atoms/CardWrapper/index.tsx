import {
  BasicWrapper,
  SpinnerWrapper,
  SpacesCardWrapper,
} from './CardWrapper.styles.jsx';

export enum CardWrapperEnum {
  base = 'base',
  spinner = 'spinner',
  card = 'card',
}

type CardWrapperType = `${CardWrapperEnum}`;

const getCardWrapper = (cardWrapperType: CardWrapperType) => {
  return {
    [CardWrapperEnum.base]: BasicWrapper,
    [CardWrapperEnum.spinner]: SpinnerWrapper,
    [CardWrapperEnum.card]: SpacesCardWrapper,
  }[cardWrapperType];
};

/**
 * Component that Wraps the cards
 */
function CardWrapper({
  cardWrapperType = CardWrapperEnum.base,
  children,
}: React.PropsWithChildren<{
  /**
   * Is this the possible variants of the CardWrapper
   */
  cardWrapperType?: CardWrapperType;
}>) {
  const CustomCardWrapper = getCardWrapper(cardWrapperType);
  return <CustomCardWrapper>{children}</CustomCardWrapper>;
}

export default CardWrapper;
