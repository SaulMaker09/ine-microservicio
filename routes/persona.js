const express = require('express');
const router = express.Router();
const personaController = require('../controllers/personaController');

// Registrar nueva persona con todos sus datos
router.post('/', personaController.crearPersona);

// Obtener datos completos de una persona
router.get('/:id', personaController.obtenerPersona);

router.get('/', personaController.obtenerTodasLasPersonas);
router.get('/curp/:curp', personaController.obtenerPersonaPorCurp);
router.delete('/:id', personaController.eliminarPersonaPorId);
router.delete('/curp/:curp', personaController.eliminarPersonaPorCurp);

module.exports = router;