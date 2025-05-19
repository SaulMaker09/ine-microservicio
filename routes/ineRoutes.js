const express = require('express');
const router = express.Router();
const { guardarPersona } = require('../controllers/ineController');

router.post('/guardar', guardarPersona);

module.exports = router;
