/* eslint-disable no-console */
import CloseButton from '../components/atoms/CloseButton';
import Card from '../components/molecules/Card';
import Pagination from '../components/molecules/Pagination';
import CharacterInfo from '../components/molecules/CharacterInfo';
import { CharacterFull } from '../types/Character';
import usePaginate from '../hooks/usePaginate';
import { useRickMortyStore } from '../store';

function Home() {
  const currentPage = useRickMortyStore((state) => state.currentPage);
  const addCharacters = useRickMortyStore((state) => state.addCharacters);
  const changeCurrentPage = useRickMortyStore(
    (state) => state.changeCurrentPage
  );
  const { loading, error, data } = usePaginate();

  const onPageChange = (newValue: number) => changeCurrentPage(newValue);

  if (loading) return <div>Loading....</div>;
  if (error) return <div>error</div>;
  addCharacters(data?.characters?.results);

  const newChar: Omit<CharacterFull, 'episode'> & {
    episode?: [object];
  } = {
    ...data.characters.results[0],
  };
  delete newChar.episode;

  return (
    <div className="App">
      <CharacterInfo characterInfo={newChar} />
      <CloseButton onClickClose={() => console.log('clicked')} />
      <Card
        name="Jerry Smith"
        image="https://rickandmortyapi.com/api/character/avatar/5.jpeg"
        status="Alive"
        species="Human"
      />
      <Pagination
        onPageChange={onPageChange}
        currentPage={currentPage}
        numberPages={data.characters.info.pages}
      />
    </div>
  );
}

export default Home;
