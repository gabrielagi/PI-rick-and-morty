import Card from "../Card/Card";
import { connect } from "react-redux";
import { CardsContainer } from "../Cards/Cards.styled-component";

const Favorites = ({ myFavorites }) => {
  return (
    <CardsContainer>
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
