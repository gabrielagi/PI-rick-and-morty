import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        setCharacter(data);
      }
    );
  }, [id]);

  return (
    <div>
      <h3>Character Detail</h3>
      <div>
        <h2>{character.name}</h2>
        <h2>{character.status}</h2>
        <h2>{character.species}</h2>
        <h2>{character.gender}</h2>
        <h2>{character.origin && character.origin.name}</h2>
        <img src={character.image} alt="" />
      </div>
    </div>
  );
};

export default Detail;
