//*==================================================================*
//*    auth.controller.ts                                            *
//*    EDER GUIMARAES RODRIGUES                                      *
//*------------------------------------------------------------------*
//*    OBJECTIVE...: PROVIDE AUTH CONTROLLER                         * 
//*------------------------------------------------------------------*
//*    IMPORTS.....:                                                 *
//*                                                                  *
import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local/local-auth.guard';
//*                                                                  *  
//*------------------------------------------------------------------*
//* EXPORT CLASS AuthController                                      *
//*------------------------------------------------------------------*
//*                                                                  * 
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }
    //*                                                              *  
    //*--------------------------------------------------------------*
    //* ENDPOINT LOGIN                                               *
    //*--------------------------------------------------------------*
    //*                                                              * 
    @UseGuards(LocalAuthGuard)
    @Post('/')
    async login(@Request() req: any) {
        return this.authService.login(req.user);
    }
    //*                                                              *
    //*--------------------------------------------------------------*
}
//*                                                                  *
//*==================================================================*
