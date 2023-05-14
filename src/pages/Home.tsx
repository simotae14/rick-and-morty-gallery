import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS_QUERY } from '../graphql';
import { Heading } from '../components/atoms/Heading.styles';

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
      <Heading active={false}>My Heading</Heading>
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
