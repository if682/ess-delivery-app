import { Module } from '@nestjs/common';
import { EncryptService } from 'src/utils/encrypt/encrypt.service';
import UserRepository from './repositories/UserRepository';
import { databaseProviders } from './typeorm/database.providers';
import { UserProviders } from './typeorm/providers/userProvider';
import { TypeOrmUserRepository } from './typeorm/repositories/user/TypeOrmUser';
import { UserContactProviders } from './typeorm/providers/userContactProvider';
import UserContactRepository from './repositories/ADMUserContactRepository';
import { TypeOrmUserContactRepository } from './typeorm/repositories/user/TypeOrmUserContact';

@Module({
  providers: [
    databaseProviders,
    ...UserProviders,
    ...UserContactProviders,
    {
      provide: UserRepository,
      useClass: TypeOrmUserRepository,
    },
    {
      provide: UserContactRepository,
      useClass: TypeOrmUserContactRepository,
    },
    EncryptService,
  ],
  exports: [databaseProviders, UserRepository, UserContactRepository],
})
export class DatabaseModule {}
