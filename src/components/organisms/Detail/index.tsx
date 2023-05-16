import { useNavigate } from 'react-router-dom';
import CardWrapper, { CardWrapperEnum } from '../../atoms/CardWrapper';
import CloseButton from '../../atoms/CloseButton';
import { AbsoluteButton } from './Detail.style';
import { useRickMortyStore } from '../../../store';
import CharacterInfo from '../../molecules/CharacterInfo';
import ListEpisodes from '../../molecules/ListEpisodes';

/**
 * Component used to show the Details of a selected Character
 */
function Detail() {
  const removeDetailId = useRickMortyStore((state) => state.removeDetailId);
  const navigate = useNavigate();
  const onCloseHandler = () => {
    removeDetailId();
    navigate('/');
  };
  return (
    <CardWrapper cardWrapperType={CardWrapperEnum.detail}>
      <AbsoluteButton>
        <CloseButton onClickClose={onCloseHandler} />
      </AbsoluteButton>
      <CharacterInfo />
      <ListEpisodes />
    </CardWrapper>
  );
}

export default Detail;
