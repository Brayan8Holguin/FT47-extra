require("dotenv").config();
const { API_KEY, API_URL_BASE } = process.env;

function getCharById_API(id) {
  // "https://rym2.up.railway.app/api/character" + "/" + "1" + "?key={}"
  return fetch(`${API_URL_BASE}/${id}?key=${API_KEY}`).then((res) =>
    res.json()
  );
}

module.exports = getCharById_API