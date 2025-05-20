const express = require('express');
const router = express.Router();
const personaController = require('../controllers/personaController');

// Registrar nueva persona con todos sus datos
router.post('/', personaController.crearPersona);

// Obtener datos completos de una persona
router.get('/:id', personaController.obtenerPersona);

module.exports = router;