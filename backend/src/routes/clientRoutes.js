const pool = require('../config/db');

class Client {
    static async getAllClients() {
        try {
            const result = await pool.request().query('SELECT * FROM Clients');
            return result.recordset;
        } catch (err) {
            throw err;
        }
    }

    static async createClient(client) {
        try {
            const { email, name, pass, role, phoneNumber } = client;
            const result = await pool.request()
                .input('email', sql.NVarChar, email)
                .input('name', sql.NVarChar, name)
                .input('pass', sql.NVarChar, pass)
                .input('role', sql.NVarChar, role)
                .input('phoneNumber', sql.NVarChar, phoneNumber)
                .query('INSERT INTO Clients (Email, Name, Pass, Role, PhoneNumber) VALUES (@email, @name, @pass, @role, @phoneNumber)');
            return result;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = Client;
