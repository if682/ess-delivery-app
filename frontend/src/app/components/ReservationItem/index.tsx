import React, { useEffect, useState } from "react";
import { APIClient } from "../../../services/api/client";
import "./index.css";
import axios from "axios";

interface ReservationProps {
  reservation: {
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
  };
}

function ReservationItem({ reservation }: ReservationProps) {

  const handleAcceptClick = async (connectionId: number) => {
    try {
      const response = await axios.patch(
        `http://localhost:8080/reservation/accept/`,
        {
          id: connectionId
        }
      );
      console.log(response.data); // Log the response data if successful
    } catch (error) {
      console.error(error); // Log the error if the reque`st fails
    }
  };

  const handleCancelClick = async (reservationId: string) => {
    try {
      const response = await axios.delete(`http://localhost:8080/reservation/${reservationId}`);
      console.log(response.data); // Log the response data if successful
    } catch (error) {
      console.error(error); // Log the error if the reque`st fails
    }
  };

  return (
<div className="reservationCardFull">
  <div>
    <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ24q9wnZHX7WrmRdNCiSiSuBGd13ma8Av7dq4x_Bripg&s'} alt="" className="reservationPicture" />
    <h1 className="reservationLocation">{reservation.city}</h1>
  </div>
  <div className="reservationContent">
    <div>
      <p className="reservationDates">From: {reservation.checkIn}</p>
      <p className="reservationDates" style={{ paddingBottom: "20px" }}>To: {reservation.checkOut}</p>
    </div>
    <div className="reservationActions">
      {!(reservation.accepted == 'aceito') && (
        <button className="reservationAction" onClick={() => handleAcceptClick(reservation.connectionId)}>
          Aceitar
        </button>
      )}
      <button className="reservationAction" onClick={() => handleCancelClick(reservation.id)}>
        Deletar
      </button>
    </div>
  </div>
</div>


  );
}

export default ReservationItem;