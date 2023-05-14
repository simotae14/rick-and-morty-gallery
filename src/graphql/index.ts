import { gql } from '@apollo/client';

export const GET_WEATHER_QUERY = gql`
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
          dimension
          residents {
            name
          }
        }
        location {
          name
          type
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
