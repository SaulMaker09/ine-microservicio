const db = require('../config/db');

class Direccion {
  static async create({ personaId, calle, numero_exterior, colonia, municipio, estado, codigo_postal }) {
    const [result] = await db.query(
      'INSERT INTO direcciones (persona_id, calle, numero_exterior, colonia, municipio, estado, codigo_postal) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [personaId, calle, numero_exterior, colonia, municipio, estado, codigo_postal]
    );
    return result.insertId;
  }

  static async findByPersonaId(personaId) {
    const [rows] = await db.query('SELECT * FROM direcciones WHERE persona_id = ?', [personaId]);
    return rows;
  }
}

module.exports = Direccion;