function getProducts(req, res) {
    console.log(req.query)

    res.send({ message: "Hola desde products", ...req.query })
}

module.exports = getProducts