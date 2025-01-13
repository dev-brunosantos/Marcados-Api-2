import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from './../prisma/prisma.service';
import { EscolheCargo, EscolheNaipe } from 'src/functions/escolheCargoNaipe';

@Injectable()
export class UsuariosService {

  constructor(
    private prisma: PrismaService
  ) { }

  async CadastrarUsuario(createUsuarioDto: CreateUsuarioDto) {
    const usuarioExistente = await this.prisma.usuarios.findFirst({
      where: { email: createUsuarioDto.email }
    })

    if (!usuarioExistente) {

      let cargoId = EscolheCargo(createUsuarioDto.cargo)
      let naipeId = EscolheNaipe(createUsuarioDto.naipe)

      const novoUsuario = await this.prisma.usuarios.create({
        data: {
          nome: createUsuarioDto.nome,
          sobrenome: createUsuarioDto.sobrenome,
          email: createUsuarioDto.email,
          senha: createUsuarioDto.senha,
          cargoId,
          naipeId
        }
      })

      return "Usuário criado com sucesso."
    }

    throw new HttpException("Usuário ja cadastrado no sistema.", HttpStatus.BAD_REQUEST)
  }

  async BuscarUsuários() {
    const usuarios = await this.prisma.usuarios.findMany({
      select: {
        id: true,
        nome: true,
        sobrenome: true,
        email: true,
        cargo: {
          select: { cargo: true }
        },
        naipe: {
          select: { naipe: true }
        },
        dtCadastro: true,
        dtAtualizacao: true,
      }
    })
    return usuarios
  }

  async FiltrarUsuariosNaipe(createUsuarioDto: CreateUsuarioDto) {

    var naipe = EscolheNaipe(createUsuarioDto.naipe)

    const usuarioNaipe = await this.prisma.usuarios.findMany({
      where: {
        naipeId: { equals: naipe }
      }
    })

    if (!usuarioNaipe) {
      throw new HttpException("Não foi encontrado nenhum usuário vinculado ao naipe informado.", HttpStatus.NOT_FOUND)
    }

    return usuarioNaipe
  }

  async FiltrarUsuarioID(id: string) {
    const idUsuario = await this.prisma.usuarios.findFirst({ where: { id } })

    if (!idUsuario) {
      throw new HttpException("Não existe nenhum usuário vinculado ao ID informado.", HttpStatus.NOT_FOUND)
    }

    return idUsuario
  }

  async Atualizar(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    const usuarioId = await this.prisma.usuarios.findFirst({ 
      where: { id },
      select: {
        id: true,
        nome: true,
        sobrenome: true,
        email: true,
        cargo: {select: { cargo: true }},
        naipe: { select: { naipe: true } },
        dtCadastro: true,
        dtAtualizacao: true
      },
    })

    if (usuarioId) {

      var cargo = EscolheCargo(updateUsuarioDto.cargo)
      var naipe = EscolheNaipe(updateUsuarioDto.naipe)

      const usuarioAtualizado = await this.prisma.usuarios.update({
        where: { id },
        select: {
          id: true,
          nome: true,
          sobrenome: true,
          email: true,
          cargo: {select: { cargo: true }},
          naipe: { select: { naipe: true } },
          dtCadastro: true,
          dtAtualizacao: true
        },
        data: {
          nome: updateUsuarioDto.nome,
          sobrenome: updateUsuarioDto.sobrenome,
          senha: updateUsuarioDto.senha,
          cargoId: cargo,
          naipeId: naipe,
        }
      })

      return {
        status: "Os dados foram atualizados com sucesso.",
        dadosAntigos: usuarioId,
        dadosAtualizados: usuarioAtualizado
      }
    }

    throw new HttpException("Não existe nenhum usuário vinculado ao ID informado.", HttpStatus.NOT_FOUND)
  }

  async Apagar(id: string) {
    const usuarioId = await this.prisma.usuarios.findFirst({ where: { id } })

    if (!usuarioId) {
      throw new HttpException("Não existe nenhum usuário vinculado ao ID informado.", HttpStatus.NOT_FOUND)
    }

    const usuario = await this.prisma.usuarios.delete({ where: { id } })

    return { message: `Os dados do usuário ${usuario.nome.toUpperCase()} ${usuario.sobrenome.toUpperCase()} foram apagados com sucesso. ` }
  }
}
