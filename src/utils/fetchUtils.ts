import { request, gql } from 'graphql-request';

import { ENDPOINT } from './constants';
import {
    Character,
    CharacterQueryResponse,
    CharacterVariables,
    Location,
    LocationQueryResponse,
    LocationVariables
} from './types';

export const fetchCharacters = async (page: CharacterVariables): Promise<Character[]> => {
  const query = gql`
    query getCharacters($page: Int!) {
      characters(page: $page) {
        results {
          name
          image
          location {
            name
          }
          status
          species
          type
        }
      }
    }
  `

  return await request(ENDPOINT, query, page)
    .then((response: CharacterQueryResponse) => response.characters.results);
}

export const fetchLocation = async (name: LocationVariables): Promise<Character[]> => {
  const query = gql`
    query getLocation($name: String!) {
      locations(filter: { name: $name }) {
        results {
          residents {
            id
          }
        }
      }
    }
  `

  return await request(ENDPOINT, query, name)
    .then((response: LocationQueryResponse) => response.locations.results[0].residents);
}