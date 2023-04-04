import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { ReservationService } from './reservation.service';
import { ReservationController } from './reservation.controller';

@Module({
  controllers: [ReservationController],
  imports: [DatabaseModule],
  providers: [ReservationService],
})
export class ReservationModule {}
