function validarUsuario(req, res, next) {
    if (!req.query || req.query.admin !== "admin") {
        // throw new Error("No tienes permisos de admin");
        res.status(403).send(JSON.stringify({message: "No tienes permisos"}))
    }else {
        next()
    }
}

module.exports = validarUsuario