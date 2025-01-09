import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateNaipeDto } from './dto/create-naipe.dto';
import { UpdateNaipeDto } from './dto/update-naipe.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class NaipesService {

  constructor(
    private prisma: PrismaService
  ) { }

  async Criar(createnaipeDto: CreateNaipeDto) {
    const naipeExistente = await this.prisma.naipes.findFirst({
      where: { naipe: createnaipeDto.naipe }
    })

    if (!naipeExistente) {
      const novonaipe = await this.prisma.naipes.create({
        data: {
          naipe: createnaipeDto.naipe
        }
      })

      return { message: `O naipe ${novonaipe.naipe} foi cadastrado com sucesso.` }
    }

    throw new HttpException("O naipe informado ja existe no sistema.", HttpStatus.BAD_REQUEST)
  }

  async ListarNaipes() {
    const naipes = await this.prisma.naipes.findMany()

    if (naipes.length === 0) {
      throw new HttpException("Não existe nenhum naipe cadastrado no sistema.", HttpStatus.NOT_FOUND)
    }
    return naipes;
  }
  
  async FiltrarNaipe(id: number) {
    const naipeId = await this.prisma.naipes.findFirst({
      where: { id }
    })
    
    if(!naipeId) {
      throw new HttpException("O ID informado não esta vinculado a nenhum naipe cadastrado no sistema.", HttpStatus.NOT_FOUND)
    }

    return naipeId;
  }

  async AtualizarNaipe(id: number, updateNaipeDto: UpdateNaipeDto) {
    const naipeAntigo = await this.prisma.naipes.findFirst({
      where: { id }
    })
    
    if(naipeAntigo) {
      const naipeAtualizado = await this.prisma.naipes.update({
        where: { id },
        data: updateNaipeDto
      })

      return {
        status: "O naipe foi atualizado com sucesso.", 
        dadosAntigos: naipeAntigo,
        dadosAtualizados: naipeAtualizado
      }
    }
    
    throw new HttpException("O ID informado não esta vinculado a nenhum naipe cadastrado no sistema.", HttpStatus.NOT_FOUND)
  }

  async ExcluirNaipe(id: number) {
    const naipeId = await this.prisma.naipes.findFirst({
      where: { id }
    })
    
    if(!naipeId) {
      throw new HttpException("O ID informado não esta vinculado a nenhum naipe cadastrado no sistema.", HttpStatus.NOT_FOUND)
    }

    return { message: `O naipe ${naipeId.naipe.toUpperCase()} foi excluído com sucesso.`}
  }
}


