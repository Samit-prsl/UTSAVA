const mysql = require("mysql2/promise");
const { DataTypes } = require("sequelize");

class User {
  constructor(config) {
    this.pool = mysql.createPool(config);
  }

  async createUser(username, email, password, phone, bookingdate) {
    const connection = await this.pool.getConnection();
    try {
      const [result] = await connection.execute(
        "INSERT INTO users (username, email, password,phone,bookingdate) VALUES (?, ?, ?,?,?)",
        [username, email, password, phone, bookingdate]
      );
      return result.insertId;
    } finally {
      connection.release();
    }
  }
}

module.exports = User;
