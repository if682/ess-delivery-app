import { Prisma, User } from "@prisma/client";

export interface IUserRepository {
    create(user: Prisma.UserCreateInput): Promise<User>;
    findByUsername(username: string): Promise<User | null>;
    findById(id: string): Promise<User | null>;
}