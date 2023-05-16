import Heading from '../../components/atoms/Heading';
import Spinner from '../../components/molecules/Spinner';
import { LoadingContainer, SpinnerContainer } from './Loading.styles';

/**
 * Page used on loading, for error messages or for the 404
 */
function Loading() {
  return (
    <LoadingContainer>
      <Heading title="Rick and Morty Gallery" />
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    </LoadingContainer>
  );
}

export default Loading;
