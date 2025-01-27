import { Injectable } from '@nestjs/common';
import { CreateLouvoreDto } from './dto/create-louvores.dto';
import { UpdateLouvoreDto } from './dto/update-louvores.dto';
import { PrismaService } from './../prisma/prisma.service';

@Injectable()
export class LouvoresService {

  constructor(private prisma: PrismaService) {}

  create(createLouvoreDto: CreateLouvoreDto) {
    return 'This action adds a new louvore';
  }

  findAll() {
    return `This action returns all louvores`;
  }

  findOne(id: number) {
    return `This action returns a #${id} louvore`;
  }

  update(id: number, updateLouvoreDto: UpdateLouvoreDto) {
    return `This action updates a #${id} louvore`;
  }

  remove(id: number) {
    return `This action removes a #${id} louvore`;
  }
}
