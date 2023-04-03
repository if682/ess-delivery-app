import { Injectable } from '@nestjs/common';
import { ReservationResponse } from '../user/interfaces';
import { Reservation } from 'src/infra/database/typeorm/entities/Reservation.entity';

@Injectable()
export class ReservationService {
  getReservationResponse(reservation: ReservationResponse): ReservationResponse {
    const { id, location, cep, checkIn, checkOut, guests, budget, additionalInfo, bedrooms, bathrooms, beds, photos } = reservation;

    return {
        id,
        location,
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
