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

   static async findByCurp(curp) {
    const [rows] = await db.query('SELECT p.* FROM personas p JOIN ine i ON p.id = i.persona_id WHERE i.curp = ?', [curp]);
    return rows[0];
  }

  static async deleteById(id) {
    // Primero eliminamos los registros relacionados
    await db.query('DELETE FROM direcciones WHERE persona_id = ?', [id]);
    await db.query('DELETE FROM ine WHERE persona_id = ?', [id]);
    
    // Luego eliminamos la persona
    const [result] = await db.query('DELETE FROM personas WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }

  static async deleteByCurp(curp) {
    // Obtenemos el ID de la persona
    const [rows] = await db.query('SELECT persona_id FROM ine WHERE curp = ?', [curp]);
    if (rows.length === 0) return false;
    
    return await this.deleteById(rows[0].persona_id);
  }
}



module.exports = Persona;