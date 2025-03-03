import React, { useEffect, useState } from 'react';
import { getClients, createClient } from '../api';

const ClientList = () => {
    const [clients, setClients] = useState([]);
    const [newClient, setNewClient] = useState({ name: '', email: '', pass: '', role: '', phoneNumber: '' });

    useEffect(() => {
        getClients().then(response => {
            if (response && response.data) {
                setClients(response.data);
            } else {
                console.error('Error fetching clients: No data in response');
            }
        }).catch(err => console.error('Error fetching clients:', err));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        createClient(newClient).then(response => {
            if (response && response.data) {
                setClients([...clients, response.data]);
                setNewClient({ name: '', email: '', pass: '', role: '', phoneNumber: '' });
            } else {
                console.error('Error creating client: No data in response');
            }
        }).catch(err => {
            console.error('Error creating client:', err);
        });
    };

    return (
        <div>
            <h1>Clients</h1>
            <ul>
                {clients.map(client => (
                    <li key={client.email}>{client.name} - {client.email}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={newClient.name} onChange={(e) => setNewClient({ ...newClient, name: e.target.value })} required />
                <input type="email" placeholder="Email" value={newClient.email} onChange={(e) => setNewClient({ ...newClient, email: e.target.value })} required />
                <input type="password" placeholder="Password" value={newClient.pass} onChange={(e) => setNewClient({ ...newClient, pass: e.target.value })} required />
                <input type="text" placeholder="Role" value={newClient.role} onChange={(e) => setNewClient({ ...newClient, role: e.target.value })} required />
                <input type="text" placeholder="Phone Number" value={newClient.phoneNumber} onChange={(e) => setNewClient({ ...newClient, phoneNumber: e.target.value })} required />
                <button type="submit">Add Client</button>
            </form>
        </div>
    );
};

export default ClientList;
