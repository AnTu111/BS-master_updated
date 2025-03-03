const Barber = require('../models/Barber');

exports.getAllBarbers = async (req, res) => {
    try {
        const barbers = await Barber.getAllBarbers();
        res.json(barbers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createBarber = async (req, res) => {
    try {
        const newBarber = await Barber.createBarber(req.body);
        res.status(201).json(newBarber);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
