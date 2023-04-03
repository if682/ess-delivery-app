import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Reservation } from '../../entities/Reservation.entity';
import { ReservationCreationDTO } from 'src/infra/database/interfaces/reservation.interface';


@Injectable()
export class TypeOrmReservationRepository {
  constructor(
    @Inject('RESERVATION_REPOSITORY')
    private reservationRepository: Repository<Reservation>,
  ) {}

  getReservations():Promise<Reservation[]>{
    return this.reservationRepository.find();
  }

  getReservationById(id: string): Promise<Reservation> {
    return this.reservationRepository.findOne({
      where: {
        id,
      },
    });
  }

  async createReservation({
    location,
    cep,
    checkIn,
    checkOut,
    guests,
    budget,
    additionalInfo,
    bedrooms,
    beds,
    bathrooms,
    photos
  }:ReservationCreationDTO): Promise<void>{

    const newReservation = new Reservation();

    Object.assign(newReservation,{
        location,
        cep,
        checkIn,
        checkOut,
        guests,
        budget,
        additionalInfo,
        bedrooms,
        beds,
        bathrooms,
        photos
        
    });

    await this.reservationRepository.save(newReservation);
  }
}
