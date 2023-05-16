import { useQuery } from '@apollo/client';

import { useRickMortyStore } from '../store';
import { GET_CHARACTERS_QUERY } from '../graphql';

function usePaginate() {
  const currentPage = useRickMortyStore((state) => state.currentPage);

  const { loading, error, data } = useQuery(GET_CHARACTERS_QUERY, {
    variables: {
      page: currentPage,
    },
  });
  return {
    loading,
    error,
    data,
  };
}

export default usePaginate;
