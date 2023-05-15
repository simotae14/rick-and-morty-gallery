import CardWrapper, { CardWrapperEnum } from '../../atoms/CardWrapper';
import SpinnerContent from '../../atoms/SpinnerContent';

/**
 * Component used for the 404 page and on loading
 */
function Spinner() {
  return (
    <CardWrapper cardWrapperType={CardWrapperEnum.spinner}>
      <SpinnerContent />
    </CardWrapper>
  );
}

export default Spinner;
