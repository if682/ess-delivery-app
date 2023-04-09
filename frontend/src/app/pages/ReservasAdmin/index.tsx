import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AppContainer from '../../components/Container';
import ReservationList from '../../components/ReservationList';
import './index.css';

const ReservasAdmin: React.FC = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    async function fetchReservations() {
      try {
        const response = await axios.get(`http://localhost:8080/reservation`);
        setReservations(response.data);
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    }

    fetchReservations();
  }, []);

  if (!reservations || reservations.length === 0) {
    return <div className='container'>No reservations to display.</div>;
  }

  return (  
    <div className='container'>
      <ReservationList reservations={reservations} />
    </div>

  );
};

export default ReservasAdmin;
