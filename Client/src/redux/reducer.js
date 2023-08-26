import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

const initialState = {
  myFavorites: [],
  allFavCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        //myFavorites: [...state.allFavCharacters, action.payload],
        //allFavCharacters: [...state.allFavCharacters, action.payload],
        myFavorites: action.payload,
        allFavCharacters: action.payload,
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: action.payload,
      };
    case FILTER:
      const allCharactersFiltered = state.allFavCharacters.filter(
        (character) => character.gender === action.payload
      );
      return {
        ...state,
        myFavorites:
          action.payload === "allCharacters"
            ? [...state.allFavCharacters]
            : allCharactersFiltered,
      };

    case ORDER:
      const allFavCharactersCopy = [...state.allFavCharacters];
      return {
        ...state,
        myFavorites:
          action.payload === "A"
            ? allFavCharactersCopy.sort((a, b) => a.id - b.id)
            : allFavCharactersCopy.sort((a, b) => b.id - a.id),
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
