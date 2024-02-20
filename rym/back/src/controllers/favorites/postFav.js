const favorites = require("../../utils/favorites");

function postFav(req, res) { 
    const character = req.body;
    const favExists = favorites.find((fav) => fav.id === character.id);
    if (favExists) {
        res.status(400).json({ message: "The character is already in favorites" });
    } else {
        favorites.push(character);
        res.status(201).json({ message: "Character added to favorites", character });
    }
}

module.exports = postFav;