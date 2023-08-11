import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/action";

import {
  CardWrapper,
  CloseButton,
  CharacterName,
  CardContentWrapper,
  CharacterImage,
  CharacterInfo,
  FavoriteButton,
  CharacterStatus,
  DetailsButton,
} from "./Card.styled-component";

function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, status, species, gender, origin, image, onClose });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

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
      <FavoriteButton
        onClick={handleFavorite}
        title={`Añadir/Quitar a ${name} de Favoritos `}
      >
        {isFav ? "❤️" : "🤍"}
      </FavoriteButton>
      <CloseButton
        onClick={() => onClose(id)}
        title={`Cerrar tarjeta de ${name}`}
        alt="Cerrar tarjeta del personaje"
      >
        X
      </CloseButton>

      <NavLink
        to={`/detail/${id}`}
        title={`Mas información sobre ${name}`}
        alt="Mas información sobre el personaje"
      >
        <CharacterName>{name}</CharacterName>
      </NavLink>

      <CardContentWrapper>
        <NavLink to={`/detail/${id}`}>
          <DetailsButton
            title={`Mas información sobre ${name}`}
            alt="Mas información sobre el personaje"
          >
            +
          </DetailsButton>
        </NavLink>
        <CharacterStatus status={status}>{status}</CharacterStatus>
        {/* <CharacterInfo>Status: {status}</CharacterInfo> */}
        {/* <CharacterInfo>Species: {species}</CharacterInfo>
        <CharacterInfo>Gender: {gender}</CharacterInfo>
        <CharacterInfo>Origin: {origin}</CharacterInfo> */}
        <CharacterImage src={image} alt="" />
      </CardContentWrapper>
    </CardWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
