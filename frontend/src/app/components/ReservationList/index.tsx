import React, { useEffect, useState } from 'react';
import "./index.css";
import ReservationItem from '../ReservationItem';

interface ReservationProps {
  reservations: {
    id: string;
    name: string;
    city: string;
    street: string;
    streetNumber: number;
    cep: string;
    checkIn: string;
    checkOut: string;
    guests: number;
    budget: number;
    additionalInfo: string;
    bedrooms: number;
    beds: number;
    bathrooms: number;
    photos: Array<File>;
    owner: string;
    accepted:string;
    connectionId: number;
  }[];
}

const ReservationList = ({ reservations }: ReservationProps) => {
  const confirmedReservations = reservations.filter(
    (reservation) => reservation.accepted == 'aceito'
  );

  const pendingReservations = reservations.filter(
    (reservation) => reservation.accepted == 'espera'
  );
 
  if (!reservations || reservations.length === 0) {
    return <div>No reservations to display</div>;
  }

  return (
    
    <div className='bothLists'>
      <div className='singleLists'>
        <h1>Confirmed Reservations</h1>
        {confirmedReservations.map((reservation) => (
          <ReservationItem
            key={reservation.id}
            reservation={reservation}
          />
        ))}
      </div>

      <div className='singleLists'>
        <h1>Pending Reservations</h1>
        {pendingReservations.map((reservation) => (
          <ReservationItem
            key={reservation.id}
            reservation={reservation}
          />
        ))}
      </div>
    </div>
  );
};


export default ReservationList;
