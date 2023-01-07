import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  imports: [DatabaseModule],
})
export class UserModule {}
