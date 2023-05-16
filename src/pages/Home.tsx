/* eslint-disable no-console */
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS_QUERY } from '../graphql';
import CloseButton from '../components/atoms/CloseButton';
import Card from '../components/molecules/Card';
import Pagination from '../components/molecules/Pagination';

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

  return (
    <div className="App">
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
