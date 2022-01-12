import { useEffect, useState } from "react";

import { fetchLocation } from "../../utils/fetchUtils";
import { Character, Location } from "../../utils/types";

type Props = {
  details: Character;
  show: boolean;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

const CharacterModal = ({details, show, onClick}: Props) => {
  let { location } = details;

  useEffect(() => {
    if (location != null) {
      fetchLocation({ name: location.name })
        .then(response => setResidents(response))
        .catch((errors) => {
          console.log(errors);
          setErrors(errors)
        });
    }
  },[location])

  const [residents, setResidents] = useState<Character[]>();
  const [errors, setErrors] = useState(null);

  if (errors != null) {
    return <div>There has been an error.</div>
  }

  return (
    <div
      className="modal-background"
      style={{display: show ? 'block' : 'none'}}
      onClick={onClick}
      >
        <div className="character-modal-wrapper">
          <h2 className="modal-close-btn" onClick={onClick}>X</h2>
          <div className="character-modal">
            <img src={details.image} style={{border: '1px solid black'}}/>
          </div>
          <div className="character-details-wrapper">
            <h3>{details.name}</h3>
            <table>
              <tr>
                <td>Status: </td>
                <td>{details.status}</td>
              </tr>
              <tr>
                <td>Species: </td>
                <td>{details.species}</td>
              </tr>
              <tr>
                <td>Location Name: </td>
                <td>{location?.name}</td>
              </tr>
              <tr>
                <td>Location Type: </td>
                <td>{location?.type}</td>
              </tr>
              <tr>
                <td>Location Dimension: </td>
                <td>{location?.dimension}</td>
              </tr>
              <tr>
                <td>Location Residents: </td>
                <td>{residents?.length}</td>
              </tr>
            </table>
          </div>
        </div>
    </div>
  )
}

export default CharacterModal;