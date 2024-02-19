require("dotenv").config();
const { API_KEY, API_URL_BASE } = process.env;

function getCharById_API(id) {
  // "https://rym2.up.railway.app/api/character" + "/" + "1" + "?key={}"
  // id, status, name, species, origin, image y gender
  return fetch(`${API_URL_BASE}/${id}?key=${API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
      const character = {
        id: data.id,
        name: data.name,
        status: data.status,
        species: data.species,
        origin: data.origin.name,
        image: data.image,
        gender: data.gender,
      };
      return character;
    })
    .catch((err) => {
      return err;
    });
}

module.exports = getCharById_API;
