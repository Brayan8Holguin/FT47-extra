require("dotenv").config();
const { API_KEY, API_URL_BASE } = process.env;

//? con promesas
/* function getCharById_API(id) {
  // "https://rym2.up.railway.app/api/character" + "/" + "1" + "?key={}"
  // id, status, name, species, origin, image y gender
  const url = `${API_URL_BASE}/${id}?key=${API_KEY}`;
  return fetch(url)
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
} */
  
//? con async await
  
async function getCharById_API(id) { 
  try {
    const url = `${API_URL_BASE}/${id}?key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
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
  } catch (error) {
    return error;
  }
}

module.exports = getCharById_API;
