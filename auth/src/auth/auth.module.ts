//*==================================================================*
//*    auth.module.ts                                                *
//*    EDER GUIMARAES RODRIGUES                                      *
//*------------------------------------------------------------------*
//*    OBJECTIVE...: PROVIDE AUTHENTICATION MODULE                   *
//*------------------------------------------------------------------*
//*    IMPORTS.....:                                                 *
//*                                                                  * 
import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { LocalStrategy } from './local/local.strategy';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './secret/constants';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt/jwt.strategy';
//*                                                                  * 
//*------------------------------------------------------------------*
//* AuthModule                                                       *
//-------------------------------------------------------------------*
//*                                                                  *
@Module({
    imports: [
        UserModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '120s' },
        }),
    ],
    providers: [
        AuthService,
        LocalStrategy,
        JwtStrategy
    ],
    exports: [AuthService],
    controllers: [AuthController],
})
//*                                                                  * 
//*------------------------------------------------------------------*
//* EXPORT CLASS AuthModule                                          *
//-------------------------------------------------------------------*
//*                                                                  *
export class AuthModule { }
//*                                                                  *
//*==================================================================*
