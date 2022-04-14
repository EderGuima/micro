//*==================================================================*
//*    jwt.strategy.ts                                               *
//*    EDER GUIMARAES RODRIGUES                                      *
//*------------------------------------------------------------------*
//*    OBJECTIVE...: JWT STRATEGY                                    * 
//*------------------------------------------------------------------*
//*    IMPORTS.....:                                                 *
//*                                                                  *
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from '../secret/constants';
//*                                                                  * 
//*------------------------------------------------------------------*
//* JwtStrategy CLASS                                                *
//-------------------------------------------------------------------*
//*                                                                  *
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret,
        });
    }
    //*                                                              * 
    //*--------------------------------------------------------------*
    //* VALIDATE USER AND PASSWORD                                   *
    //---------------------------------------------------------------*
    //*                                                              *
    async validate(payload: any) {
        return { id: payload.sub, username: payload.username };
    }
    //*                                                              *
    //*--------------------------------------------------------------*
}
//*                                                                  *
//*==================================================================*
