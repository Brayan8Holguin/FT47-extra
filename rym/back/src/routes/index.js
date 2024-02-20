const router = require("express").Router();
const getCharById = require("../controllers/characters/getCharById");
const register = require("../controllers/user/register");
const login = require("../controllers/user/login");
const {
  getAllFav,
  getFavById,
  postFav,
  deleteFav,
} = require("../controllers/favorites");
const corsPilicy = require("../middlewares/cors");

//? middleware

router.use(corsPilicy);

//? characters

router.get("/character/:id", getCharById);

//? users

router.get("/login", login);

router.post("/register", register);

//? favorites

router.get("/favorites", getAllFav);

router.get("/favorites/:id", getFavById);

router.post("/favorites", postFav);

router.delete("/favorites/:id", deleteFav);

module.exports = router;
