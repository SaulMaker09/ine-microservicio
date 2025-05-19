const db = require('../db');

exports.guardarPersona = (req, res) => {
  const { nombre, apellidoPaterno, apellidoMaterno, curp, claveElector, direccion } = req.body;

  const query = `INSERT INTO personas (nombre, apellidoPaterno, apellidoMaterno, curp, claveElector, direccion)
                 VALUES (?, ?, ?, ?, ?, ?)`;

  db.query(query, [nombre, apellidoPaterno, apellidoMaterno, curp, claveElector, direccion], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ mensaje: 'Error al guardar los datos' });
    }
    res.status(200).json({ mensaje: 'Datos guardados correctamente' });
  });
};
