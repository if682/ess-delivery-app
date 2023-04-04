import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { AppController } from './app.controller';
import { AuthModule } from './modules/auth/auth.module';
import { ReservationModule } from './modules/reservation/reservation.module';

@Module({
  imports: [UserModule, AuthModule,ReservationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
