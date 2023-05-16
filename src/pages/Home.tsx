/* eslint-disable no-console */
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS_QUERY } from '../graphql';
import CloseButton from '../components/atoms/CloseButton';
import Card from '../components/molecules/Card';
import Pagination from '../components/molecules/Pagination';
import CharacterInfo from '../components/molecules/CharacterInfo';
import { CharacterFull } from '../types/Character';

function Home() {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useQuery(GET_CHARACTERS_QUERY, {
    variables: {
      page,
    },
  });

  const onPageChange = (newValue: number) => setPage(newValue);

  if (loading) return <div>Loading....</div>;
  if (error) return <div>error</div>;
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
        currentPage={page}
        numberPages={data.characters.info.pages}
      />
    </div>
  );
}

export default Home;
