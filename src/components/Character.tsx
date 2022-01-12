import React, { useState, useCallback } from 'react';

import { Character as CharacterType } from '../utils/types';
import CharacterModal from './modals/CharacterModal';

const Character = ({details}: {details: CharacterType}) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const handleShowModal = useCallback(() => setShowModal(true), []);
    const handleCloseModal = useCallback((e: React.MouseEvent<HTMLElement>) => {
        if (e.target === e.currentTarget) {
            setShowModal(false);
        }
    }, []);
    
    return (
        <>
        <CharacterModal details={details} show={showModal} onClick={handleCloseModal}/>
        <div className="character-wrapper" onClick={handleShowModal}>
            <h3>{details.name}</h3>
            <h3>{details.status}</h3>
            <h3>{details.species}</h3>
        </div>
        </>
    )
}

export default Character;