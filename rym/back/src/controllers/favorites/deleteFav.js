const favorites = require("../../utils/favorites");

function deleteFav(req, res) {
  const { id } = req.params;
  const favExists = favorites.find((fav) => fav.id == id);
  if (favExists) {
    const index = favorites.indexOf(favExists);
    favorites.splice(index, 1);
    res
      .status(200)
      .json({ message: "Character deleted from favorites", ...favExists });
  } else {
    res.status(404).json({ message: "The character is not in favorites" });
  }
}

module.exports = deleteFav;
