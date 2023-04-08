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
import { ReservationConnectionProvider } from './typeorm/providers/rerservationConnectionProvider';
import { ReservationConnectionRepository } from './repositories/ReservationConnectionRepository';
import { TypeOrmReservationConnectionRepository } from './typeorm/repositories/Reservation/TypeOrmReservationConnection';
import { FavoritesProviders } from './typeorm/providers/favoritesProvider';
import FavoritesRepository from './repositories/FavoritesRepository';
import TypeormFavoritesRepository from './typeorm/repositories/Reservation/TypeOrmFavorites';
import { EvalutationProvider } from './typeorm/providers/evaluationProvider';
@Module({
  providers: [
    databaseProviders,
    ...UserProviders,
    ...UserContactProviders,
    ...ReservationProviders,
    ...ReservationConnectionProvider,
    ...FavoritesProviders,
    ...EvalutationProvider,
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
    {
      provide: ReservationConnectionRepository,
      useClass: TypeOrmReservationConnectionRepository,
    },
    {
      provide: FavoritesRepository,
      useClass: TypeormFavoritesRepository,
    },
    EncryptService,
  ],
  exports: [
    databaseProviders,
    UserRepository,
    UserContactRepository,
    ReservationRepository,
    ReservationConnectionRepository,
    FavoritesRepository,
  ],
})
export class DatabaseModule {}
