const db = require('../config/db');

class Persona {
  static async create({ nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento }) {
    const [result] = await db.query(
      'INSERT INTO personas (nombre, apellido_paterno, apellido_materno, fecha_nacimiento) VALUES (?, ?, ?, ?)',
      [nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento]
    );
    return result.insertId;
  }

  static async findById(id) {
    const [rows] = await db.query('SELECT * FROM personas WHERE id = ?', [id]);
    return rows[0];
  }
}

module.exports = Persona;