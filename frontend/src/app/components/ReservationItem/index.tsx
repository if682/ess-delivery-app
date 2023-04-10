import React, { useEffect, useState } from "react";
import { APIClient } from "../../../services/api/client";
import "./index.css";
import axios from "axios";

interface User {
  id: string;
  email: string;
  cpf: string;
  name: string;
  password: string;
  role: string;
}

interface ReservationDetails {
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
}
interface ReservationProps {
  reservation: {
    id: number;
    userId: string;
    reservationId: string;
    accepted: string;
    createdAt: string;
    reservationDetails: ReservationDetails;
    user: User;
  };
}

function ReservationItem({ reservation }: ReservationProps) {

  const handleAcceptClick = async (connectionId: number) => {
    try {
      const response = await axios.patch(
        `http://localhost:8080/reservation/accept/`,
        {
          id: connectionId,
          accepted: true
        }
      );
      console.log(response.data); // Log the response data if successful
    } catch (error) {
      console.error(error); // Log the error if the reque`st fails
    }
  };

  const handleCancelClick = async (connectionId: number) => {
    try {
      const response = await axios.patch(
        `http://localhost:8080/reservation/accept/`,
        {
          id: connectionId,
          accepted: false
        }
      );
      console.log(response.data); // Log the response data if successful
    } catch (error) {
      console.error(error); // Log the error if the reque`st fails
    }
  };


  return (
<div className="reservationCardFull">
  <div>
    <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ24q9wnZHX7WrmRdNCiSiSuBGd13ma8Av7dq4x_Bripg&s'} alt="" className="reservationPicture" />
    <h1 className="reservationLocation">{reservation.reservationDetails.name}</h1>
  </div>
  <div className="reservationContent">
    <div>
      <p className="reservationDates">From: {reservation.reservationDetails.checkIn}</p>
      <p className="reservationDates" style={{ paddingBottom: "20px" }}>To: {reservation.reservationDetails.checkOut}</p>
    </div>
    <div className="reservationActions">
      {!(reservation.accepted == 'aceito') && (
        <button className="reservationAction" onClick={() => handleAcceptClick(reservation.id)}>
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