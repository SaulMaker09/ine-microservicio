const db = require('../config/db');

class Persona {
  static async create({ nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, genero }) {
    const [result] = await db.query(
      'INSERT INTO personas (nombre, apellido_paterno, apellido_materno, fecha_nacimiento, genero) VALUES (?, ?, ?, ?, ?)',
      [nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento, genero]
    );
    return result.insertId;
  }

  static async findById(id) {
    const [rows] = await db.query('SELECT * FROM personas WHERE id = ?', [id]);
    return rows[0];
  }
}

module.exports = Persona;