import { Prisma, User } from "@prisma/client";

export interface IUserRepository {
    create(data: Prisma.UserCreateInput): Promise<User>;
    findByUsername(username: string): Promise<User | null>;
    findById(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    updateResetToken(id: string, newDate: Date, newToken: string): Promise<void>;
    changePassword(id: string, newPassword: string): Promise<void>;
}