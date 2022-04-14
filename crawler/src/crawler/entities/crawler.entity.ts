import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Ativos {
    @PrimaryColumn()
    codigo: string;

    @Column()
    setor: string;

    @Column()
    preco_atual: string;

    @Column()
    liquidez_dia: string;

    @Column()
    dividendo: string;

    @Column()
    dy: string;

    @Column()
    dy_acumulado_3m: string;

    @Column()
    dy_acumulado_6m: string;

    @Column()
    dy_acumulado_12m: string;

    @Column()
    dy_media_3m: string;

    @Column()
    dy_media_6m: string;

    @Column()
    dy_media_12m: string;

    @Column()
    dy_ano: string;

    @Column()
    variacao_preco: string;

    @Column()
    rentab_periodo: string;

    @Column()
    rentab_acumulada: string;

    @Column()
    patrimonio_liquido: string;

    @Column()
    vpa: string;

    @Column()
    p_vpa: string;

    @Column()
    dy_patrimonial: string;

    @Column()
    variacao_patrimonial: string;

    @Column()
    rentab_patrim_periodo: string;

    @Column()
    rentab_patrim_acumulada: string;

    @Column()
    vacancia_fisica: string;

    @Column()
    vacancia_financeira: string;

    @Column()
    quantidade_ativos: string;
}