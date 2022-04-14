//*==================================================================*
//*    crawler.module.ts                                             *
//*    EDER GUIMARAES RODRIGUES                                      *
//*------------------------------------------------------------------*
//*    OBJECTIVE...: GET WEBPAGES INFOS (CRAWLER)                    *
//*------------------------------------------------------------------*
//*    IMPORTS.....:                                                 *
//*                                                                  *
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrawlerController } from './crawler.controller';
import { CrawlerService } from './crawler.service';
import { Ativos } from './entities/crawler.entity';
//*                                                                  * 
//*------------------------------------------------------------------*
//* CrawlerController                                                *
//-------------------------------------------------------------------*
//*                                                                  *  
@Module({
    imports: [HttpModule, TypeOrmModule.forFeature([Ativos])],
    providers: [CrawlerService],
    exports: [CrawlerService],
    controllers: [CrawlerController]
})
//*                                                                  * 
//*------------------------------------------------------------------*
//* EXPORT CLASS LinxRappiModule                                     *
//-------------------------------------------------------------------*
//*                                                                  *
export class CrawlerModule { }
//*                                                                  *
//*==================================================================*
