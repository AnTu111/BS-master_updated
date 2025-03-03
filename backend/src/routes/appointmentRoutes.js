const express = require('express');
const router = express.Router();
const { sql, poolPromise } = require('../config/db');

router.get('/', async (req, res) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query('SELECT * FROM Appointments');
        res.json(result.recordset);
    } catch (err) {
        console.error('Error fetching appointments:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/', async (req, res) => {
    const { clientId, barberId, appointmentTime, status } = req.body;
    if (!clientId || !barberId || !appointmentTime || !status) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    try {
        const pool = await poolPromise;
        await pool.request()
            .input('clientId', sql.Int, clientId)
            .input('barberId', sql.Int, barberId)
            .input('appointmentTime', sql.DateTime, appointmentTime)
            .input('status', sql.VarChar, status)
            .query('INSERT INTO Appointments (clientId, barberId, appointmentTime, status) VALUES (@clientId, @barberId, @appointmentTime, @status)');
        res.status(201).json({ message: 'Appointment created' });
    } catch (err) {
        console.error('Error creating appointment:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
