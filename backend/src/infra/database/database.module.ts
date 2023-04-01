import { Module } from '@nestjs/common';
import { EncryptService } from 'src/utils/encrypt/encrypt.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaUser } from './prisma/repositories/PrismaUser';
import UserRepository from './repositories/UserRepository';
import { databaseProviders } from './typeorm/database.providers';
import { UserProviders } from './typeorm/providers/userProvider';
import { TypeOrmUserRepository } from './typeorm/repositories/user/TypeOrmUser';

@Module({
  providers: [
    databaseProviders,
    ...UserProviders,
    {
      provide: UserRepository,
      useClass: TypeOrmUserRepository,
    },
    EncryptService,
  ],
  exports: [databaseProviders, UserRepository],
})
export class DatabaseModule {}
