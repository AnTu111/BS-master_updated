const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { connectDB } = require('./src/config/db'); // Import connectDB

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB(); // Call connectDB

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Define a route for the root path ("/")
app.get('/', (req, res) => {
    res.send('Welcome to the Barber Shop API!'); // Or any other message/content
});

// Routes
app.use('/api/clients', require('./routes/clientRoutes'));
app.use('/api/barbers', require('./routes/barberRoutes'));
app.use('/api/appointments', require('./routes/appointmentRoutes'));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
