//*==================================================================*
//*    app.module.ts                                                 * 
//*    EDER GUIMARAES RODRIGUES                                      *
//*------------------------------------------------------------------*
//*    OBJECTIVE...: APP MODULE                                      *
//*------------------------------------------------------------------* 
//*    IMPORTS.....:                                                 * 
//*                                                                  * 
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrawlerModule } from './crawler/crawler.module';
import { TasksService } from './tasks/tasks.service';
//*                                                                  * 
//*------------------------------------------------------------------*
//* AppModule                                                        *
//-------------------------------------------------------------------*
//*                                                                  *
@Module({
    imports: [
        CrawlerModule,
        ConfigModule.forRoot(),
        ScheduleModule.forRoot(),
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
    providers: [
        TasksService,
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
