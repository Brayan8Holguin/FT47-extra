const router = require('express').Router();
const uuid = require("uuid");
const bcrypt = require("bcrypt");
const users = require('../models/users');

// Ruta para registrar un nuevo usuario
router.post('/register', (req, res) => {
    const { username, password } = req.body;
    
    // Verificar si el usuario ya está registrado
    if (users.find(user => user.username === username)) {
        return res.status(400).json({ message: 'El usuario ya existe' });
    }

    // Hashear la contraseña antes de almacenarla
    const hashedPassword = bcrypt.hashSync(password, 10);
    
    // Crear un nuevo usuario
    const newUser = {
        id: uuid.v4(),
        username,
        password: hashedPassword
    };

    // Agregar el nuevo usuario a la lista de usuarios
    users.push(newUser);

    res.status(201).json({ message: 'Usuario registrado correctamente', ...newUser });
});

// Ruta para iniciar sesión
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    // Buscar el usuario en la lista de usuarios
    const user = users.find(user => user.username === username);
    
    // Verificar si el usuario existe
    if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Verificar la contraseña
    if (!bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    res.status(200).json({ message: 'Inicio de sesión exitoso' });
});

// Ruta para obtener todos los usuarios
router.get('/users', (req, res) => {
    res.status(200).json(users);
});

// Ruta para obtener un usuario por su ID
router.get('/users/:id', (req, res) => {
    const user = users.find(user => user.id === req.params.id);
    
    if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.status(200).json(user);
});

// Ruta para actualizar un usuario por su ID
router.put('/users/:id', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.id === req.params.id);
    
    if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Actualizar los datos del usuario
    user.username = username || user.username;
    user.password = password || user.password;

    res.status(200).json({ message: 'Usuario actualizado correctamente' });
});

// Ruta para eliminar un usuario por su ID
router.delete('/users/:id', (req, res) => {
    const userIndex = users.findIndex(user => user.id === req.params.id);
    
    if (userIndex === -1) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Eliminar el usuario de la lista de usuarios
    users.splice(userIndex, 1);

    res.status(200).json({ message: 'Usuario eliminado correctamente' });
});

module.exports = router;