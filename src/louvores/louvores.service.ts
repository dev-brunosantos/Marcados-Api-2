import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateLouvoreDto } from './dto/create-louvores.dto';
import { UpdateLouvoreDto } from './dto/update-louvores.dto';
import { PrismaService } from './../prisma/prisma.service';

@Injectable()
export class LouvoresService {

  constructor(private prisma: PrismaService) {}

  async Criar(createLouvoreDto: CreateLouvoreDto) {
    const ministro = await this.prisma.usuarios.findFirst({
      where: { nome: createLouvoreDto.ministro }
    })

    if(ministro.cargoId === 1) {

      const novoLouvor = await this.prisma.louvores.create({
        data: {
          nome: createLouvoreDto.nome,
          link: createLouvoreDto.link
        }
      })

      return "Novo louvor cadastrado com sucesso."
    }

    throw new HttpException("O usuário não é ministro e não possui acesso a funcionalidade de cadastro de louvores.", HttpStatus.BAD_REQUEST)
  }
  
  async Listar() {
    const louvores = await this.prisma.louvores.findMany()
    
    if(!louvores) {
      throw new HttpException("Não existe nenhum louvor cadastrado no sistema", HttpStatus.NOT_FOUND)
    }

    return louvores
  }

  findOne(id: number) {
    return `This action returns a #${id} louvore`;
  }

  async Atualizar(id: number, updateLouvoreDto: UpdateLouvoreDto) {
    const idLouvor = await this.prisma.louvores.findFirst({
      where: { id }
    })

    if(!idLouvor) {
      throw new HttpException("O ID informado não esta vinculado a nenhum louvor cadastrado no sistema", HttpStatus.NOT_FOUND)
    }

    const atualizacao = await this.prisma.louvores.update({
      where: { id },
      data: updateLouvoreDto
    })

    return {
      message: "As alterações foram finalizadas com sucesso.",
      dados_antigos: idLouvor,
      dados_atualizados: atualizacao
    }
  }

  async Apagar(id: number) {
    const idLouvor = await this.prisma.louvores.findFirst({
      where: { id }
    })

    if(!idLouvor) {
      throw new HttpException("O ID informado não esta vinculado a nenhum louvor cadastrado no sistema", HttpStatus.NOT_FOUND)
    }

    await this.prisma.louvores.delete({
      where: { id }
    })

    return `O louvor ${idLouvor.nome} foi apagado como solicitado.`
  }
}
