//*==================================================================*
//*    crawler.service.ts                                            *
//*    EDER GUIMARAES RODRIGUES                                      *
//*------------------------------------------------------------------*
//*    OBJECTIVE...: GET WEBPAGES INFOS (CRAWLER)                    *
//*------------------------------------------------------------------*
//*    IMPORTS.....:                                                 *
import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as cheerio from 'cheerio';
import { lastValueFrom } from 'rxjs';
import { Repository } from 'typeorm';
import { Ativos } from './entities/crawler.entity';
//*                                                                  *
//*------------------------------------------------------------------*
//* CrawlerService CLASS                                             *
//-------------------------------------------------------------------*
//*                                                                  *
@Injectable()
export class CrawlerService {
    constructor(
        private httpService: HttpService,
        @InjectRepository(Ativos)
        private ativosRepository: Repository<Ativos>,
    ) { }
    async crawler() {
        try {
            let ativos: Ativos = new Ativos();
            const response = await lastValueFrom(
                this.httpService.get('https://www.fundsexplorer.com.br/ranking')
            );
            const $ = cheerio.load(response.data);

            const tbody: any = [];
            const tbodyMultipleArrays: any = [];
            const thead = [
                "codigo", "setor",
                "preco_atual", "liquidez_dia",
                "dividendo", "dy",
                "dy_acumulado_3m", "dy_acumulado_6m",
                "dy_acumulado_12m", "dy_media_3m",
                "dy_media_6m", "dy_media_12m",
                "dy_ano", "variacao_preco",
                "rentab_periodo", "rentab_acumulada",
                "patrimonio_liquido", "vpa",
                "p_vpa", "dy_patrimonial",
                "variacao_patrimonial", "rentab_patrim_periodo",
                "rentab_patrim_acumulada", "vacancia_fisica",
                "vacancia_financeira", "quantidade_ativos"
            ];

            $("td").each((i, element) => {
                tbody.push($(element).text().trim())
            });
            while (tbody.length > 0) {
                tbodyMultipleArrays.push(tbody.splice(0, 26))
            }

            tbodyMultipleArrays.forEach((element: any) => {
                const ativosArray: any = [];
                const ativosObject: any = {};
                for (let i = 0; i < element.length; i++) {
                    ativosObject[thead[i]] = element[i]
                }
                ativosArray.push(ativosObject)
                ativos = ativosArray[0];
                this.ativosRepository.save(ativos);
            });

            console.log("sucesso");
            return 'success';
            //*------------------------------------------------------*
            //* THROW ERROR                                          *
            //*------------------------------------------------------*
        } catch (error) {
            console.log('Erro: ' + error);
            throw new HttpException('Bad request - Get Funds', HttpStatus.BAD_REQUEST);
        }
    }
}
//*                                                                  *
//*==================================================================*