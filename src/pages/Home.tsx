import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS_QUERY } from '../graphql';
import Card from '../components/molecules/Card';
import Spinner from '../components/molecules/Spinner';
import Heading from '../components/atoms/Heading';

function Home() {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useQuery(GET_CHARACTERS_QUERY, {
    variables: {
      page,
    },
  });

  return (
    <>
      <Heading title="Rick and Morty Gallery" />
      <h2>subs</h2>
      <Spinner />
      <Card
        name="Jerry Smith"
        image="https://rickandmortyapi.com/api/character/avatar/5.jpeg"
        status="Alive"
        species="Human"
      />
      {loading && <div>loading</div>}
      {error && <div>error</div>}
      {data && <div>{data.characters.info.count}</div>}
      <button
        type="button"
        aria-label="Click"
        onClick={() => setPage(page + 1)}
      >
        Click me
      </button>
    </>
  );
}

export default Home;
