import { Link } from "react-router-dom";
import {
  CardWrapper,
  CloseButton,
  CharacterName,
  CardContentWrapper,
  CharacterImage,
  CharacterInfo,
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
        <CharacterInfo>Status: {status}</CharacterInfo>
        <CharacterInfo>Species: {species}</CharacterInfo>
        <CharacterInfo>Gender: {gender}</CharacterInfo>
        <CharacterInfo>Origin: {origin}</CharacterInfo>
        <CharacterImage src={image} alt="" />
      </CardContentWrapper>
    </CardWrapper>
  );
}
