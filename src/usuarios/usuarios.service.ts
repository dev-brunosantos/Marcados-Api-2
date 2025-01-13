import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from './../prisma/prisma.service';
import { EscolheCargo, EscolheNaipe } from 'src/functions/escolheCargoNaipe';

@Injectable()
export class UsuariosService {

  constructor(
    private prisma: PrismaService
  ){}

  async CadastrarUsuario(createUsuarioDto: CreateUsuarioDto) {
    const usuarioExistente = await this.prisma.usuarios.findFirst({
      where: { email: createUsuarioDto.email }
    })

    if(!usuarioExistente) {

      let cargoId = EscolheCargo(createUsuarioDto.cargo) // 0
      let naipeId = EscolheNaipe(createUsuarioDto.naipe) // 0

      // switch (createUsuarioDto.cargo) {
      //   case "Ministro":
      //     cargoId = 1;
      //     break;
      
      //   default:
      //     break;
      // }

      // switch (createUsuarioDto.naipe) {
      //   case "Soprano":
      //     naipeId = 1;
      //     break;
      
      //   default:
      //     break;
      // }

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

    return 'This action adds a new usuario';
  }

  async findAll() {
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

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
