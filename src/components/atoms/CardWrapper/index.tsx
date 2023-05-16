import {
  BaseWrapper,
  SpinnerWrapper,
  RickCardWrapper,
  RickCardSelectedWrapper,
  DetailCardWarapper,
} from './CardWrapper.styles.jsx';

export enum CardWrapperEnum {
  base = 'base',
  spinner = 'spinner',
  card = 'card',
  selected = 'selected',
  detail = 'detail',
}

type CardWrapperType = `${CardWrapperEnum}`;

const getCardWrapper = (cardWrapperType: CardWrapperType) => {
  return {
    [CardWrapperEnum.base]: BaseWrapper,
    [CardWrapperEnum.spinner]: SpinnerWrapper,
    [CardWrapperEnum.card]: RickCardWrapper,
    [CardWrapperEnum.selected]: RickCardSelectedWrapper,
    [CardWrapperEnum.detail]: DetailCardWarapper,
  }[cardWrapperType];
};

/**
 * Component that Wraps the card
 */
function CardWrapper({
  cardWrapperType = CardWrapperEnum.base,
  onClickHandler,
  children,
}: React.PropsWithChildren<{
  /**
   * Is this the possible variant of the CardWrapper
   */
  cardWrapperType?: CardWrapperType;
  /**
   * Is the action triggered on clicking the CardWrapper
   */
  onClickHandler?: () => void;
}>) {
  const CustomCardWrapper = getCardWrapper(cardWrapperType);

  return (
    <CustomCardWrapper onClick={onClickHandler}>{children}</CustomCardWrapper>
  );
}

export default CardWrapper;
