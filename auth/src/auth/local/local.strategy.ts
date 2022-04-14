//*==================================================================*
//*    local.strategy.ts                                             *
//*    EDER GUIMARAES RODRIGUES                                      *
//*------------------------------------------------------------------*
//*    OBJECTIVE...: LOCAL STRATEGY                                  * 
//*------------------------------------------------------------------*
//*    IMPORTS.....:                                                 *
//*                                                                  *
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
//*                                                                  * 
//*------------------------------------------------------------------*
//* LocalStrategy CLASS                                              *
//-------------------------------------------------------------------*
//*                                                                  *
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super();
    }
    //*                                                              * 
    //*--------------------------------------------------------------*
    //* VALIDATE USER AND PASSWORD                                   *
    //---------------------------------------------------------------*
    //*                                                              *
    async validate(username: string, password: string): Promise<any> {
        const user = await this.authService.validateUser(username, password);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
    //*                                                              *
    //*--------------------------------------------------------------*
}
//*                                                                  *
//*==================================================================*
