//*==================================================================*
//*    app.module.ts                                                 * 
//*    EDER GUIMARAES RODRIGUES                                      *
//*------------------------------------------------------------------*
//*    OBJECTIVE...: APP MODULE                                      *
//*------------------------------------------------------------------*
//*    IMPORTS.....:                                                 *
//*                                                                  * 
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
//*                                                                  * 
//*------------------------------------------------------------------*
//* AppModule                                                        *
//-------------------------------------------------------------------*
//*                                                                  *
@Module({
    imports: [
        AuthModule,
        UserModule,
        TypeOrmModule.forRoot({ 
            type: process.env.DATABASE_TYPE as any,
            host: process.env.DATABASE_HOST,
            port: Number(process.env.DATABASE_PORT),
            username: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASS,
            database: process.env.DATABASE_DB,
            entities: ["dist/**/*.entity{.ts,.js}"],
            synchronize: true,
        }),
    ],
})
//*                                                                  * 
//*------------------------------------------------------------------*
//* export AppModule CLASS                                           *
//-------------------------------------------------------------------*
//*                                                                  *
export class AppModule { }
//*                                                                  *
//*==================================================================*
