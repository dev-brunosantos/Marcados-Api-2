import { PrismaService } from './../prisma/prisma.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateEscalaDto } from './dto/create-escala.dto';
import { UpdateEscalaDto } from './dto/update-escala.dto';
import { EscalasFunctionService } from 'src/functions/escalas-function.service';

@Injectable()
export class EscalasService {

  constructor(
    private prisma: PrismaService,
    private escalas: EscalasFunctionService
  ) { }

  async NovaEscala(createEscalaDto: CreateEscalaDto) {
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
  

  async ListarTodos() {
    const escalas = await this.prisma.escalas.findMany()

    if(!escalas) {
      throw new HttpException("Não existe nenhuma escala cadastrada no sistema.", HttpStatus.NOT_FOUND)
    }

    return escalas
  }

  async ListarTarefa(id: number) {
    const escalaId = await this.prisma.escalas.findFirst({
      where: { id }
    })

    if(!escalaId) {
      throw new HttpException("Não existe nenhuma escala vinculada ao ID informado.", HttpStatus.NOT_FOUND)
    }

    return escalaId
  }

  update(id: number, updateEscalaDto: UpdateEscalaDto) {
    return `This action updates a #${id} escala`;
  }

  remove(id: number) {
    return `This action removes a #${id} escala`;
  }
}
