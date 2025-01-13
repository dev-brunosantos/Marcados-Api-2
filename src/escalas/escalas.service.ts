import { UsuariosService } from './../usuarios/usuarios.service';
import { Injectable } from '@nestjs/common';
import { CreateEscalaDto } from './dto/create-escala.dto';
import { UpdateEscalaDto } from './dto/update-escala.dto';
import { PrismaService } from './../prisma/prisma.service';
import { EscolheNaipe } from 'src/functions/escolheCargoNaipe';
import { CreateUsuarioDto } from 'src/usuarios/dto/create-usuario.dto';

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
        naipe: { select: { naipe: true }}
      }
    })

    return usuarios
  }
  async EscalaModelo(modelo) {
    const naipe = await this.FiltrarUsuarios(modelo)

    const naipeModel = Math.floor(Math.random() * naipe.length)

    return naipe[naipeModel]
  }

  // async GerarEscala(createEscalaDto: CreateEscalaDto) {
  //   const contralto = await this.FiltrarUsuarios(createEscalaDto.contralto)
  //   const tecladistas = await this.FiltrarUsuarios(createEscalaDto.teclado)

  //   const contraltoUser = Math.floor(Math.random() * contralto.length)
  //   const teclado1 = Math.floor(Math.random() * tecladistas.length)
  //   const teclado2 = Math.floor(Math.random() * tecladistas.length)

  //   const soprano = this.EscalaModelo(createEscalaDto.bateria)
  //   const guitarra = this.EscalaModelo(createEscalaDto.guitarra)

  //   return {
  //     contraltos: contralto[contraltoUser],
  //     tecladistas: [tecladistas[teclado1], tecladistas[teclado2]],
  //   }

  // }

  async GerarEscala(createEscalaDto: CreateEscalaDto) {
    const sing = await this.EscalaModelo(createEscalaDto.contralto)
    const sing2 = await this.EscalaModelo(createEscalaDto.contralto)
    const music = await this.EscalaModelo(createEscalaDto.teclado)
    const music2 = await this.EscalaModelo(createEscalaDto.bateria)

    return {
      sing: [sing, sing2],
      music, 
      music2
    }

  }
}
