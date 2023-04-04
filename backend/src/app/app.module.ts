import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { AppController } from './app.controller';
import { AuthModule } from './modules/auth/auth.module';
import { JWTService } from 'src/utils/auth/jwt.service';

@Module({
  imports: [UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, JWTService],
})
export class AppModule {}
