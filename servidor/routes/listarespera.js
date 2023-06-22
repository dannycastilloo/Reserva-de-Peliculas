//Rutas producto
const express = require('express');
const router = express.Router();
const peliculasController = require('../controllers/listaresperaController');

//api/productos
router.post('/', peliculasController.crearPeliculas);
router.get('/', peliculasController.obtenerPeliculas);
router.put('/:id', peliculasController.actualizarPeliculas);
router.get('/:id', peliculasController.verPeliculas);
router.delete('/:id', peliculasController.eliminarPeliculas);

module.exports = router;