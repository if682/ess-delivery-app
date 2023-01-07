import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { EncryptService } from 'src/utils/encrypt/encrypt.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [EncryptService, AuthService],
  imports: [DatabaseModule],
})
export class AuthModule {}
