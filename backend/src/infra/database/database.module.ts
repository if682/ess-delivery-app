import { Module } from '@nestjs/common';
import { EncryptService } from 'src/utils/encrypt/encrypt.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaUser } from './prisma/repositories/PrismaUser';
import UserRepository from './repositories/UserRepository';

@Module({
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUser,
    },
    EncryptService,
  ],
  exports: [UserRepository],
})
export class DatabaseModule {}
