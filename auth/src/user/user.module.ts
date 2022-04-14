//*==================================================================*
//*    auth.module.ts                                                *
//*    EDER GUIMARAES RODRIGUES                                      *
//*------------------------------------------------------------------*
//*    OBJECTIVE...: PROVIDE USER INFORMATION MODULE                 *
//*------------------------------------------------------------------*
//*    IMPORTS.....:                                                 *
//*                                                                  * 
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
//*                                                                  * 
//*------------------------------------------------------------------*
//* UserModule                                                       *
//-------------------------------------------------------------------*
//*                                                                  *
@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserService],
    exports: [UserService],
    controllers: [UserController],
})
//*                                                                  * 
//*------------------------------------------------------------------*
//* EXPORT CLASS UserModule                                          *
//-------------------------------------------------------------------*
//*                                                                  *
export class UserModule { }
//*                                                                  *
//*==================================================================*
