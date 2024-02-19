const favorites = require("../../utils/favorites");

function getFavById(req, res) {
  const { id } = req.params
  const favExists = favorites.find((fav) => fav.id == id)
  if (favExists) {
    res.status(200).json(favExists)
  } else {
    res.status(404).json({ message: 'The character is not in favorites' })
  }
}

module.exports = getFavById;