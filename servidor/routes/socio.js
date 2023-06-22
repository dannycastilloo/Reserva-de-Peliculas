//Rutas producto
const express = require('express');
const router = express.Router();
const userController = require('../controllers/SocioController');

//api/usuario
router.post('/', socioController.crearSocio);
router.post('/', socioController.obtenerSocio);

module.exports = router;