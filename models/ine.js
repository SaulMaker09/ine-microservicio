const db = require('../config/db');

class INE {
  static async create({ personaId, claveElector, numeroEmision, vigencia, curp }) {
    const [result] = await db.query(
      'INSERT INE ine (persona_id, clave_elector, numero_emision, vigencia, curp) VALUES (?, ?, ?, ?, ?)',
      [personaId, claveElector, numeroEmision, vigencia, curp]
    );
    return result.insertId;
  }

  static async findByPersonaId(personaId) {
    const [rows] = await db.query('SELECT * FROM ine WHERE persona_id = ?', [personaId]);
    return rows[0];
  }
}

module.exports = INE;