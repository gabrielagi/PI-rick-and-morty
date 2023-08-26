//const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

const URL = "https://rym2-production.up.railway.app/api/character";
const API_KEY = "henrym-gabrielagi";

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios(`${URL}/${id}?key=${API_KEY}`);

    if (!data.name) throw new Error(`ID: ${id} Not Found`);

    const character = {
      id: data.id,
      name: data.name,
      species: data.species,
      origin: data.origin,
      image: data.image,
      gender: data.gender,
      status: data.status,
    };
    return res.status(200).json(character);
  } catch (error) {
    return error.message.includes("ID")
      ? res.status(404).send(error.message)
      : res.status(500).send(error.message);
    //res.status(500).send(error.response.data.error);
  }
  //Envío el error por send ya que es un mensaje, si enviara el objeto completo error utilizaría JSON
};

module.exports = {
  getCharById,
};
