import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AppContainer from '../../components/Container';
import ReservationList from '../../components/ReservationList';
import './index.css';


const getUserId = async () => {
  const response = await axios.get(`/login/<token-usuário>`);
  return response.data.userId;
};

const Reservas: React.FC = () => {
  const [reservations, setReservations] = useState([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    async function fetchReservations() {
      try {
        //const id = '1d97c5c2-bcdd-4834-bbed-c23efaba06ca';
        //setUserId(id);
        const response = await axios.get(`http://localhost:8080/reservation/created/1d97c5c2-bcdd-4834-bbed-c23efaba06ca`);
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

export default Reservas;
