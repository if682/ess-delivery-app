import { User, Prisma } from "@prisma/client";
import { randomUUID } from "crypto";
import { IUserRepository } from "../IUsersRepository";


export class InMemoryUsersRepository implements IUserRepository{
    public users: User[] = [];

    async create(data: Prisma.UserCreateInput): Promise<User> {
        const user: User = {
            id: randomUUID(),
            name: data.name,
            password: data.password,
            username: data.username,
            role: 'USER',
            location: null,
            phone: null,
            birthdate: new Date(),
            email: data.email,
            passwordResetToken: null,
            resetTokenExpires: null,
            photo: null
        }
        this.users.push(user);

        return user;
    }

    async findByUsername(username: string): Promise<User | null> {
        const user = this.users.find((item) => item.username == username)
        if(!user){
            return null;
        }
        return user;
    }

    async findByEmail(email: string): Promise<User | null> {
        const user = this.users.find((item) => item.email == email)
        if(!user){
            return null;
        }
        return user;
    }
    
    async findById(id: string): Promise<User | null> {
        const user = this.users.find((item) => item.id == id)
        if(!user){
            return null;
        }
        return user;
    }

    async updateResetToken(id: string, newDate: Date, newToken: string): Promise<void> {
        const index = this.users.findIndex((item) => item.id == id)

        if(index != -1){
            this.users[index].passwordResetToken = newToken;
            this.users[index].resetTokenExpires = newDate;
        }
    }

    async changePassword(id: string, newPassword: string): Promise<void> {
        const index = this.users.findIndex((item) => item.id == id)
        
        if(index != -1){
            this.users[index].password = newPassword;
        }
    }

    async save(data: User): Promise<User> {
        const index = this.users.findIndex((item) => item.id == data.id);

        this.users[index] = data;

        return this.users[index];
    }

 }