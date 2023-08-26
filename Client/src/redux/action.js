import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";
import axios from "axios";

export const addFav = (character) => {
  return async (dispatch) => {
    const endpoint = "http://localhost:3001/rickandmorty/fav";

    try {
      const { data } = await axios.post(endpoint, character);
      dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
      // Puedes disparar una acción de manejo de errores si lo deseas.
    }
  };
};

export const removeFav = (id) => {
  return async (dispatch) => {
    const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;

    try {
      const { data } = await axios.delete(endpoint);
      dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (order) => {
  return { type: ORDER, payload: order };
};
