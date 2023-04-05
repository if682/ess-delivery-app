import { Module } from '@nestjs/common';
import { EncryptService } from 'src/utils/encrypt/encrypt.service';
import UserRepository from './repositories/UserRepository';
import { databaseProviders } from './typeorm/database.providers';
import { UserProviders } from './typeorm/providers/userProvider';
import { TypeOrmUserRepository } from './typeorm/repositories/user/TypeOrmUser';
import { UserContactProviders } from './typeorm/providers/userContactProvider';
import UserContactRepository from './repositories/ADMUserContactRepository';
import { TypeOrmUserContactRepository } from './typeorm/repositories/user/TypeOrmUserContact';
import { ReservationProviders } from './typeorm/providers/reservationProvider';
import { ReservationRepository } from './repositories/ReservationRepository';
import { TypeOrmReservationRepository } from './typeorm/repositories/Reservation/TypeOrmReservation';
@Module({
  providers: [
    databaseProviders,
    ...UserProviders,
    ...UserContactProviders,
    ...ReservationProviders,
    {
      provide: UserRepository,
      useClass: TypeOrmUserRepository,
    },
    {
      provide: UserContactRepository,
      useClass: TypeOrmUserContactRepository,
    },
    { 
      provide: ReservationRepository,
      useClass: TypeOrmReservationRepository,
    },
    EncryptService,
  ],
  exports: [databaseProviders, UserRepository, UserContactRepository,ReservationRepository], 
})
export class DatabaseModule {}
