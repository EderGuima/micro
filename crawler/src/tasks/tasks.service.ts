//*==================================================================*
//*    tasks.service.ts                                              *
//*    EDER GUIMARAES RODRIGUES                                      *
//*------------------------------------------------------------------*
//*    OBJECTIVE...: CREATE CRON TASKS                               *
//*------------------------------------------------------------------*
//*    IMPORTS.....:                                                 *
//*                                                                  *
import { Injectable } from '@nestjs/common'; 
import { Interval } from '@nestjs/schedule';
import { CrawlerService } from 'src/crawler/crawler.service';
//*                                                                  *
//*------------------------------------------------------------------*
//* TasksService CLASS                                               *
//-------------------------------------------------------------------*
//*                                                                  *
@Injectable()
export class TasksService {
    constructor(
        private crawlerService: CrawlerService,
    ) { }                                    
    //*                                                              *
    //*--------------------------------------------------------------*
    //* INTERVAL 5000 MS - 5 SECONDS                                 *
    //---------------------------------------------------------------*
    //*                                                              * 
    @Interval(11115000)
    async handleInterval() {
        await this.crawlerService.crawler();
    }
}
//*                                                                  *
//*==================================================================*