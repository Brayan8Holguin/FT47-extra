const favorites = require("../../utils/favorites");

function getAllFav(req, res) {
    res.status(200).json(favorites);
}

module.exports = getAllFav;