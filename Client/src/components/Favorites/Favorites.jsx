import Card from "../Card/Card";
import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/action";
import {
  PageContainer,
  CardsContainer,
  SelectorContainer,
  SelectorWrapper,
  CustomSelect,
} from "./favorites.styled-component";
import { useState } from "react";

const Favorites = ({ myFavorites }) => {
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(true);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };
  return (
    <PageContainer>
      <SelectorContainer>
        <SelectorWrapper>
          <CustomSelect onChange={handleOrder}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
          </CustomSelect>
        </SelectorWrapper>

        <SelectorWrapper>
          <CustomSelect onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
            <option value="allCharacters">All Characters</option>
          </CustomSelect>
        </SelectorWrapper>
      </SelectorContainer>

      <CardsContainer>
        {myFavorites?.map((fav) => (
          <Card
            key={fav.id}
            id={fav.id}
            name={fav.name}
            status={fav.status}
            species={fav.species}
            gender={fav.gender}
            origin={fav.origin}
            image={fav.image}
            onClose={fav.onClose}
          />
        ))}
      </CardsContainer>
    </PageContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
