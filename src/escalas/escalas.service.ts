import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateEscalaDto } from './dto/create-escala.dto';
import { UpdateEscalaDto } from './dto/update-escala.dto';
import { EscalasFunctionService } from 'src/functions/escalas-function.service';

@Injectable()
export class EscalasService {

  constructor(
    private prisma: PrismaService,
    private escalas: EscalasFunctionService
  ) { }

  async create(createEscalaDto: CreateEscalaDto) {
    const escala1 = await this.escalas.CriarModelo(createEscalaDto);
    const escala2 = await this.escalas.CriarModelo(createEscalaDto);
  
    const escala = {
      sopranos: `${escala1.soprano}, ${escala2.soprano}`, 
      contraltos: `${escala1.contralto}, ${escala2.contralto}`, 
      tenores: `${escala1.tenor}, ${escala2.tenor}`, 
      tecladistas: `${escala1.teclado}, ${escala2.teclado}`, 
      violonista: `${escala1.violao}`, 
      guitarrista: `${escala1.guitarra}`, 
      baixista: `${escala1.baixo}`,
      baterista: `${escala1.bateria}`, 
    };

    const novaEscala = await this.prisma.escalas.create({
      data: {
        sopranos: escala.sopranos,
        contraltos: escala.contraltos,
        tenores: escala.tenores,
        tecladistas: escala.tecladistas,
        violonista: escala.violonista,
        guitarrista: escala.guitarrista,
        baixista: escala.baixista,
        baterista: escala.baterista,
        culto: new Date()
      },
    });
  
    return novaEscala
  }
  

  findAll() {
    return `This action returns all escalas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} escala`;
  }

  update(id: number, updateEscalaDto: UpdateEscalaDto) {
    return `This action updates a #${id} escala`;
  }

  remove(id: number) {
    return `This action removes a #${id} escala`;
  }

  // TESTE DE NOVOS METODOS

  // async FiltrarUsuarioNaipe(naipe: string) {
  //   const naipeId = this.filtros.EscolheNaipe(naipe)

  //   const usuarios = await this.prisma.usuarios.findMany({
  //     where: {
  //       naipe: { id: naipeId }
  //     },
  //     select: { nome: true, sobrenome: true }
  //   })

  //   return usuarios
  // }

  // async FormataUsuarioString(naipe: string) {
  //   const usuarios = await this.FiltrarUsuarioNaipe(naipe)

  //   if (usuarios.length === 0) {
  //     throw new Error('Nenhum usuário encontrado para o naipe.');
  //   }

  //   const index = Math.floor(Math.random() * usuarios.length)

  //   return `${usuarios[index].nome} ${usuarios[index].sobrenome}`
  // }

  // async CriarModelo(createEscalaDto: CreateEscalaDto) {
  //   const soprano = await this.FormataUsuarioString(createEscalaDto.sopranos)
  //   const contralto = await this.FormataUsuarioString(createEscalaDto.contraltos)
  //   const tenor = await this.FormataUsuarioString(createEscalaDto.tenores)
  //   const teclado = await this.FormataUsuarioString(createEscalaDto.tecladistas)
  //   const violao = await this.FormataUsuarioString(createEscalaDto.violao)
  //   const guitarra = await this.FormataUsuarioString(createEscalaDto.guitarra)
  //   const baixo = await this.FormataUsuarioString(createEscalaDto.baixo)
  //   const bateria = await this.FormataUsuarioString(createEscalaDto.bateria)

  //   return {
  //     soprano,
  //     contralto,
  //     tenor,
  //     teclado,
  //     violao,
  //     guitarra,
  //     baixo,
  //     bateria
  //   }
  // }

}
