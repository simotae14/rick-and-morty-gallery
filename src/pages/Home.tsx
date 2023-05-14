import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_WEATHER_QUERY } from '../graphql';

function Home() {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useQuery(GET_WEATHER_QUERY, {
    variables: {
      page,
    },
  });

  return (
    <>
      <h1>Hello World</h1>
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
