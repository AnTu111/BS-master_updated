import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const api = axios.create({
    baseURL: API_URL,
});

export default api;

export const getClients = () => api.get('/clients').catch(err => console.error('Error fetching clients:', err));
export const createClient = (client) => api.post('/clients', client).catch(err => console.error('Error creating client:', err));

export const getBarbers = () => api.get('/barbers').catch(err => console.error('Error fetching barbers:', err));
export const createBarber = (barber) => api.post('/barbers', barber).catch(err => console.error('Error creating barber:', err));

export const getAppointments = () => api.get('/appointments').catch(err => console.error('Error fetching appointments:', err));
export const createAppointment = (appointment) => api.post('/appointments', appointment).catch(err => console.error('Error creating appointment:', err));
