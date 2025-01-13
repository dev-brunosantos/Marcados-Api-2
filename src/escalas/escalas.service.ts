import { Injectable } from '@nestjs/common';
import { CreateEscalaDto } from './dto/create-escala.dto';
import { UpdateEscalaDto } from './dto/update-escala.dto';
import { PrismaService } from './../prisma/prisma.service';
import { EscolheNaipe } from 'src/functions/escolheCargoNaipe';

@Injectable()
export class EscalasService {

  constructor(
    private prisma: PrismaService
  ) { }

  create(createEscalaDto: CreateEscalaDto) {
    return 'This action adds a new escala';
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

  async FiltrarUsuarios(naipe: string) {

    var naipeId = EscolheNaipe(naipe)

    const usuarios = await this.prisma.usuarios.findMany({
      where: { naipeId: { equals: naipeId } },
      select: {
        nome: true,
        sobrenome: true,
        // cargo: { select: { cargo: true }},
        // naipe: { select: { naipe: true }}
      }
    })

    const usuario = Math.floor(Math.random() * usuarios.length)

    return usuarios[usuario]
  }

  async EscalaModelo(createEscalaDto: CreateEscalaDto) {

    const s1 = await this.FiltrarUsuarios(createEscalaDto.soprano1)
    const s2 = await this.FiltrarUsuarios(createEscalaDto.soprano2)
    const c1 = await this.FiltrarUsuarios(createEscalaDto.contralto1)
    const c2 = await this.FiltrarUsuarios(createEscalaDto.contralto2)
    const t1 = await this.FiltrarUsuarios(createEscalaDto.tenor1)
    const t2 = await this.FiltrarUsuarios(createEscalaDto.tenor2)
    const tecla1 = await this.FiltrarUsuarios(createEscalaDto.teclado1)
    const tecla2 = await this.FiltrarUsuarios(createEscalaDto.teclado2)
    const v = await this.FiltrarUsuarios(createEscalaDto.violao)
    const g = await this.FiltrarUsuarios(createEscalaDto.guitarra)
    const bx = await this.FiltrarUsuarios(createEscalaDto.baixo)
    const bt = await this.FiltrarUsuarios(createEscalaDto.bateria)

    const dados = {
      s1, s2, c1, c2, t1, t2, 
      tecla1, tecla2, v, g, bx, bt
    }

    return dados
  }

  async GerarEscala(createEscalaDto: CreateEscalaDto) {

    const escalas = await this.EscalaModelo(createEscalaDto)

    return {
      sopranos: [escalas.s1, escalas.s2],
      contraltos: [escalas.c1, escalas.c2],
      tenores: [escalas.t1, escalas.t2],
      tecladistas: [escalas.tecla1, escalas.tecla2],
      violonista: escalas.v,
      guitarra: escalas.g,
      baixista: escalas.bx,
      baterista: escalas.bt
    }
  }
}
