import { Injectable } from '@nestjs/common';
import { CreateCargoDto } from './dto/create-cargo.dto';
import { UpdateCargoDto } from './dto/update-cargo.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CargosService {

  constructor(
    private prisma: PrismaService
  ) {}

  Criar(createCargoDto: CreateCargoDto) {
    return 'This action adds a new cargo';
  }

  ListarCargos() {
    return `This action returns all cargos`;
  }

  FiltrarCargo(id: number) {
    return `This action returns a #${id} cargo`;
  }

  AtualizarCargo(id: number, updateCargoDto: UpdateCargoDto) {
    return `This action updates a #${id} cargo`;
  }

  ExcluirCargo(id: number) {
    return `This action removes a #${id} cargo`;
  }
}
