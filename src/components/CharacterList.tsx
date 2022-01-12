import React, { useEffect, useState } from 'react';

import CharacterComponent from './Character';
import { fetchCharacters } from '../utils/fetchUtils';
import { Character, CharacterErrorResponse, CharacterVariables } from '../utils/types';

const CharacterList = ({variables}: {variables: CharacterVariables}) => {
    useEffect(() => {
      fetchCharacters(variables)
        .then(response => setCharacters(response))
        .catch((errors: CharacterErrorResponse) => setErrors(errors));

      return () => {
        setErrors(null);
        setCharacters([]);
      }
    }, [variables])

    const [characters, setCharacters] = useState<Character[]>([]);
    const [errors, setErrors] = useState<CharacterErrorResponse | null>(null);

    return (
      <div className="character-list-container">
        <div className="character-wrapper">
          <h3>Name</h3>
          <h3>Status</h3>
          <h3>Species</h3>
        </div>
        {errors != null
          ? <div>There has been an error.</div>
          : characters?.map((character: Character, i) => {
            return (
              <CharacterComponent details={character} key={i} />
            )}
          )
        }
      </div>
    )
}

export default CharacterList;