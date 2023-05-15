import { ReactComponent as RickMortyLoader } from '../../../assets/rick-morty.svg';
import { SpinnerContainer } from './SpinnerContent.styles';

/**
 * Component that show an image for the Spinner content
 */
function SpinnerContent() {
  return (
    <SpinnerContainer>
      <RickMortyLoader />
    </SpinnerContainer>
  );
}

export default SpinnerContent;
