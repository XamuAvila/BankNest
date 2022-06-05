import { Body, Controller, Get, Inject, Post, Query } from '@nestjs/common';
import { Prisma, UserAccount } from '@prisma/client';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(@Inject(UsersService) protected usersService:UsersService){}
    @Post()
    createUser(@Body() user: Prisma.UserAccountCreateInput): Promise<UserAccount> {
        return this.usersService.createUser(user);
    }

    @Get()
    getUser(@Query() user: Prisma.UserAccountWhereUniqueInput): Promise<UserAccount>{
        return this.usersService.getUser(user);
    }
}
