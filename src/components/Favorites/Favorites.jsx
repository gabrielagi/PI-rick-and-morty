import Card from "../Card/Card";
import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/action";
import { CardsContainer } from "../Cards/Cards.styled-component";

const Favorites = ({ myFavorites }) => {
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };
  return (
    <CardsContainer>
      <div>
        <select onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>

        <select onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>

      {myFavorites?.map((fav) => {
        return (
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
        );
      })}
    </CardsContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
