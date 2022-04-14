//*==================================================================*
//*    auth.service.ts                                               *
//*    EDER GUIMARAES RODRIGUES                                      *
//*------------------------------------------------------------------*
//*    OBJECTIVE...: PROVIDE AUTHENTICATION SERVICES                 * 
//*------------------------------------------------------------------*
//*    IMPORTS.....:                                                 *
//*                                                                  *
import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
//*                                                                  * 
//*------------------------------------------------------------------*
//* AuthService CLASS                                                *
//-------------------------------------------------------------------*
//*                                                                  *
@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) { }
    //*                                                              *
    //*--------------------------------------------------------------*
    //* LOGIN                                                        *
    //*--------------------------------------------------------------*
    //*                                                              *
    async login(user: any) {
        const payload = { username: user.username, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
    //*                                                              *
    //*--------------------------------------------------------------*
    //* VALIDATE USER                                                *
    //*--------------------------------------------------------------*
    //*                                                              *
    async validateUser(username: string, password: string) {
        const user = await this.userService.findOne(username);
        if (user && user.password === password) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
    //*                                                              *
    //*--------------------------------------------------------------*
}
//*                                                                  *
//*==================================================================*
