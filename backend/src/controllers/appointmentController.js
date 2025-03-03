const Appointment = require('../models/Appointment');

exports.getAllAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.getAllAppointments();
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createAppointment = async (req, res) => {
    try {
        const newAppointment = await Appointment.createAppointment(req.body);
        res.status(201).json(newAppointment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
