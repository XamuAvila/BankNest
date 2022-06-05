import { Inject, Injectable } from '@nestjs/common';
import { Prisma, UserAccount } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
    constructor(private prisma:PrismaService){}

    async createUser(user: Prisma.UserAccountCreateInput):Promise<UserAccount>{
        return this.prisma.userAccount.create({data:user});
    }

    async getUser(email: Prisma.UserAccountWhereUniqueInput ): Promise<UserAccount>{
        return this.prisma.userAccount.findUnique({
            where: email
        })
    }
}
