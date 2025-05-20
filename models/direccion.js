const db = require('../config/db');

class Direccion {
  static async create({ personaId, calle, numeroExterior, colonia, municipio, estado, codigoPostal }) {
    const [result] = await db.query(
      'INSERT INTO direcciones (persona_id, calle, numero_exterior, colonia, municipio, estado, codigo_postal) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [personaId, calle, numeroExterior, colonia, municipio, estado, codigoPostal]
    );
    return result.insertId;
  }

  static async findByPersonaId(personaId) {
    const [rows] = await db.query('SELECT * FROM direcciones WHERE persona_id = ?', [personaId]);
    return rows;
  }
}

module.exports = Direccion;