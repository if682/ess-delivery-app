import { Module } from '@nestjs/common';
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
  ],
  exports: [UserRepository],
})
export class DatabaseModule {}
