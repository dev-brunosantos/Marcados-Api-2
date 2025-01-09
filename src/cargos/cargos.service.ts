import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCargoDto } from './dto/create-cargo.dto';
import { UpdateCargoDto } from './dto/update-cargo.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CargosService {

  constructor(
    private prisma: PrismaService
  ) { }

  async Criar(createCargoDto: CreateCargoDto) {
    const cargoExistente = await this.prisma.cargos.findFirst({
      where: { cargo: createCargoDto.cargo }
    })

    if (!cargoExistente) {
      const novoCargo = await this.prisma.cargos.create({
        data: {
          cargo: createCargoDto.cargo
        }
      })

      return { message: `O cargo ${novoCargo.cargo} foi cadastrado com sucesso.` }
    }

    throw new HttpException("O cargo informado ja existe no sistema.", HttpStatus.BAD_REQUEST)
  }

  async ListarCargos() {
    const cargos = await this.prisma.cargos.findMany()

    if (cargos.length === 0) {
      throw new HttpException("Não existe nenhum cargo cadastrado no sistema.", HttpStatus.NOT_FOUND)
    }
    return cargos;
  }
  
  async FiltrarCargo(id: number) {
    const cargoId = await this.prisma.cargos.findFirst({
      where: { id }
    })
    
    if(!cargoId) {
      throw new HttpException("O ID informado não esta vinculado a nenhum cargo cadastrado no sistema.", HttpStatus.NOT_FOUND)
    }

    return cargoId;
  }

  AtualizarCargo(id: number, updateCargoDto: UpdateCargoDto) {
    return `This action updates a #${id} cargo`;
  }

  ExcluirCargo(id: number) {
    return `This action removes a #${id} cargo`;
  }
}
