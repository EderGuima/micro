//*==================================================================*
//*    user.controller.ts                                            *
//*    EDER GUIMARAES RODRIGUES                                      *
//*------------------------------------------------------------------*
//*    OBJECTIVE...: PROVIDE USER CONTROLLER                         * 
//*------------------------------------------------------------------*
//*    IMPORTS.....:                                                 *
//*                                                                  *
import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';
import { UserService } from './user.service';
//*                                                                  *  
//*------------------------------------------------------------------*
//* EXPORT CLASS UserController                                      *
//*------------------------------------------------------------------*
//*                                                                  * 
@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }
    //*                                                              *
    //*--------------------------------------------------------------*
    //* PUT ENDPOINT - GET ALL USER INFORMATION                      *
    //*--------------------------------------------------------------*
    //*                                                              *
    @UseGuards(JwtAuthGuard)
    @Get('/')
    getProfile(@Request() req: any) {
        return req.user;
    }
    //*                                                              *
    //*--------------------------------------------------------------*
    //*                                                              *
    //*--------------------------------------------------------------*
    //* PUT ENDPOINT - GET ALL USER INFORMATION                      *
    //*--------------------------------------------------------------*
    //*                                                              *
    @UseGuards(JwtAuthGuard)
    @Post('/newUser')
    async product(@Body() body: any) {
        return this.userService.newUser(body)
    }
    //*                                                              *
    //*--------------------------------------------------------------*
}
//*                                                                  *
//*==================================================================*
