import { gql } from '@apollo/client';

export const GET_CHARACTERS_QUERY = gql`
  query getCharactersByPage($page: Int!) {
    characters(page: $page) {
      info {
        count
        pages
      }
      results {
        id
        name
        image
        status
        species
        type
        gender
        origin {
          name
          type
          dimension
          residents {
            name
          }
        }
        location {
          name
          type
          dimension
          residents {
            name
          }
        }
        episode {
          name
          air_date
          episode
        }
      }
    }
  }
`;
