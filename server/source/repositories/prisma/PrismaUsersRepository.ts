import { Prisma, User } from "@prisma/client";
import { IUserRepository } from "../IUsersRepository";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class PrismaUsersRepository implements IUserRepository {
    async create(data: Prisma.UserCreateInput) {
        const user = await prisma.user.create({
            data,
        })

        return user;
    }

    async findByUsername(username: string) {
        const user = await prisma.user.findUnique({
            where: {
                username
            }
        })

        return user;
    }
    async findById(id: string) {
        const user = await prisma.user.findUnique({
            where: {
                id
            }
        })

        return user;
    }
}