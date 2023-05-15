import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS_QUERY } from '../graphql';
import CardWrapper from '../components/atoms/CardWrapper';
import CardContent from '../components/atoms/CardContent';
import Spinner from '../components/molecules/Spinner';

function Home() {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useQuery(GET_CHARACTERS_QUERY, {
    variables: {
      page,
    },
  });

  return (
    <>
      <h1>Hello World</h1>
      <h2>subs</h2>
      <Spinner />
      <CardWrapper cardWrapperType="card">
        <CardContent
          name="Jerry Smith"
          image="https://rickandmortyapi.com/api/character/avatar/5.jpeg"
          status="Alive"
          species="Human"
        />
      </CardWrapper>
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
