const pool = require('../config/db');

class Barber {
    static async getAllBarbers() {
        try {
            const result = await pool.request().query('SELECT * FROM Barbers');
            return result.recordset;
        } catch (err) {
            throw err;
        }
    }

    static async createBarber(barber) {
        try {
            const { userId, name, profileDetails } = barber;
            const result = await pool.request()
                .input('userId', sql.NVarChar, userId)
                .input('name', sql.NVarChar, name)
                .input('profileDetails', sql.NVarChar, profileDetails)
                .query('INSERT INTO Barbers (UserID, Name, ProfileDetails) VALUES (@userId, @name, @profileDetails)');
            return result;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = Barber;
