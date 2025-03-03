import React from 'react';
import ClientList from './components/ClientList';
import BarberList from './components/BarberList';
import AppointmentList from './components/AppointmentList';

function App() {
    return (
        <div>
            <ClientList />
            <BarberList />
            <AppointmentList />
        </div>
    );
}

export default App;
