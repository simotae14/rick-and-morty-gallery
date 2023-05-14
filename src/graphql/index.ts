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

export const GET_CHARACTER_BY_ID_QUERY = gql`
  query getCharacterById($id: ID!) {
    character(id: $id) {
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
`;
