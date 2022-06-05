import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    UsersModule,
    UsersModule
  ],
  controllers: [
    UsersController
  ],
  providers: [
    UsersService,
    PrismaService
  ],
})
export class AppModule { }
