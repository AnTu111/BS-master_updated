import React, { useEffect, useState } from 'react';
import { getBarbers, createBarber } from '../api';

const BarberList = () => {
    const [barbers, setBarbers] = useState([]);
    const [newBarber, setNewBarber] = useState({ name: '', profileDetails: '', userId: '' });

    useEffect(() => {
        getBarbers().then(response => {
            if (response && response.data) {
                setBarbers(response.data);
            } else {
                console.error('Error fetching barbers: No data in response');
            }
        }).catch(err => console.error('Error fetching barbers:', err));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        createBarber(newBarber).then(response => {
            if (response && response.data) {
                setBarbers([...barbers, response.data]);
                setNewBarber({ name: '', profileDetails: '', userId: '' });
            } else {
                console.error('Error creating barber: No data in response');
            }
        }).catch(err => {
            console.error('Error creating barber:', err);
        });
    };

    return (
        <div>
            <h1>Barbers</h1>
            <ul>
                {barbers.map(barber => (
                    <li key={barber.userId}>{barber.name} - {barber.profileDetails}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={newBarber.name} onChange={(e) => setNewBarber({ ...newBarber, name: e.target.value })} required />
                <input type="text" placeholder="Profile Details" value={newBarber.profileDetails} onChange={(e) => setNewBarber({ ...newBarber, profileDetails: e.target.value })} required />
                <input type="text" placeholder="User ID" value={newBarber.userId} onChange={(e) => setNewBarber({ ...newBarber, userId: e.target.value })} required />
                <button type="submit">Add Barber</button>
            </form>
        </div>
    );
};

export default BarberList;
