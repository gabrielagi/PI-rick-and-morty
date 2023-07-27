import { Link } from "react-router-dom";
import {
  CardWrapper,
  CloseButton,
  CharacterName,
  CardContentWrapper,
  CharacterImage,
} from "./Card.styled-component";

export default function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
}) {
  return (
    // <div>
    //   <button onClick={() => onClose(id)}>X</button>

    //   <Link to={`/detail/${id}`}>
    //     <h2>{name}</h2>
    //   </Link>

    //   {/* <h2>{name}</h2> */}
    //   <h2>{status}</h2>
    //   <h2>{species}</h2>
    //   <h2>{gender}</h2>
    //   <h2>{origin}</h2>
    //   <img src={image} alt="" />
    // </div>

    <CardWrapper>
      <CloseButton onClick={() => onClose(id)}>X</CloseButton>

      <Link to={`/detail/${id}`}>
        <CharacterName>{name}</CharacterName>
      </Link>

      <CardContentWrapper>
        <CharacterName>Status: {status}</CharacterName>
        <CharacterName>Species: {species}</CharacterName>
        <CharacterName>Gender: {gender}</CharacterName>
        <CharacterName>Origin: {origin}</CharacterName>
        <CharacterImage src={image} alt="" />
      </CardContentWrapper>
    </CardWrapper>
  );
}
