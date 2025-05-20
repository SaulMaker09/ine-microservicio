const Persona = require('../models/persona');
const Direccion = require('../models/direccion');
const INE = require('../models/ine');

exports.crearPersona = async (req, res) => {
  try {
    // Crear persona
    const personaId = await Persona.create(req.body.persona);
    
    // Crear dirección (relacionada lógicamente)
    await Direccion.create({
      personaId,
      ...req.body.direccion
    });
    
    // Crear datos INE (relacionados lógicamente)
    await INE.create({
      personaId,
      ...req.body.ine
    });
    
    res.status(201).json({ 
      success: true,
      message: 'Persona registrada correctamente',
      personaId 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false,
      message: 'Error al registrar persona' 
    });
  }
};

exports.obtenerPersona = async (req, res) => {
  try {
    const persona = await Persona.findById(req.params.id);
    if (!persona) {
      return res.status(404).json({ 
        success: false,
        message: 'Persona no encontrada' 
      });
    }
    
    const direccion = await Direccion.findByPersonaId(req.params.id);
    const ine = await INE.findByPersonaId(req.params.id);
    
    res.status(200).json({
      success: true,
      data: {
        persona,
        direccion,
        ine
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false,
      message: 'Error al obtener persona' 
    });
  }
};