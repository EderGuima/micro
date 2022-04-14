//*==================================================================*
//*    user.service.ts                                               *
//*    EDER GUIMARAES RODRIGUES                                      *
//*------------------------------------------------------------------*
//*    OBJECTIVE...: PROVIDE INFORMATIONS ABOUT USERS                *
//*------------------------------------------------------------------*
//*    IMPORTS.....:                                                 *
//*                                                                  *
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
//*                                                                  * 
//*------------------------------------------------------------------*
//* UserService CLASS                                                *
//-------------------------------------------------------------------*
//*                                                                  *
@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }
    //*                                                              *
    //*--------------------------------------------------------------*
    //* FIND A USER IN DATABASE                                      *
    //*--------------------------------------------------------------*
    //*                                                              *
    async findOne(username: string) {
        const response = await this.userRepository.find({ where: { username: username } });
        return response[0];
    }
    //*                                                              *
    //*--------------------------------------------------------------*
    //* FIND A USER IN DATABASE                                      *
    //*--------------------------------------------------------------*
    //*                                                              *
    async newUser(body: any) {
        try {
            let user: User = new User();
            let message = '';
            const response = await this.findOne(body.username);
            if (response === undefined) {
                user = body
                await this.userRepository.save(user)
                message = 'Usuário salvo com sucesso!';
            } else {
                message = 'Usuário já existente!';
            }
            return {
                "message": message,
            };
        } catch (error) {
            //*------------------------------------------------------*
            //* THROW ERROR                                          *
            //*------------------------------------------------------*
            console.log('Erro: ' + error);
            throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
        }
    }
    //*                                                              *
    //*--------------------------------------------------------------*
}
//*                                                                  *
//*==================================================================*

