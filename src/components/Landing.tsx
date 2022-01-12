import React, { useCallback, useState } from 'react';

import CharacterList from './CharacterList';
import { CharacterVariables } from '../utils/types';

const Landing: React.FunctionComponent = () => {
  const [variables, setVariables] = useState<CharacterVariables>({ page: 1 });
  const [newPage, setNewPage] = useState<string | undefined>(undefined);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    return setNewPage(e.target.value)
  }, []);
  const handleClick = useCallback(() => {
    if (newPage !== undefined) {
      setVariables({
        page: parseInt(newPage)
      })
    }
  }, [newPage]);

  return (
    <div className="app-container">
      <h1>Rick and Morty Characters</h1>
      <div>
        <span>Current Page: </span>
        <input readOnly={false} type="text" defaultValue={newPage} onChange={handleChange} />
        <button onClick={handleClick}>Go</button>
      </div>
      <CharacterList variables={variables} />
    </div>
  );
}

export default Landing;