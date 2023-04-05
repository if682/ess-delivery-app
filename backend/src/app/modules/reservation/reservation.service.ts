import { Injectable } from '@nestjs/common';
import { ReservationResponse } from './interfaces';
import { Reservation } from 'src/infra/database/typeorm/entities/Reservation.entity';

@Injectable()
export class ReservationService {
  getReservationResponse(reservation: Reservation): ReservationResponse {
    const { id, name,city,street,streetNumber, cep, checkIn, checkOut, guests, budget, additionalInfo, bedrooms, bathrooms, beds, photos } = reservation;

    return {
        id,
        name,
        city,
        street,
        streetNumber,
        cep,
        checkIn,
        checkOut,
        guests,
        budget,
        beds,
        additionalInfo,
        bedrooms,
        bathrooms,
        photos
    };
  }
}
