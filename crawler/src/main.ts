//*==================================================================*
//*    main.ts                                                       * 
//*    EDER GUIMARAES RODRIGUES                                      *
//*------------------------------------------------------------------*
//*    IMPORTS.....:                                                 *
//*                                                                  * 
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//*                                                                  *
//*------------------------------------------------------------------*
//*                                                                  *

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(2000);
}
//*                                                                  *
//*------------------------------------------------------------------*
//*                                                                  *
bootstrap();
//*                                                                  *
//*==================================================================*
