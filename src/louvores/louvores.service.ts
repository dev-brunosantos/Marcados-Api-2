import { Injectable } from '@nestjs/common';
import { CreateLouvoreDto } from './dto/create-louvore.dto';
import { UpdateLouvoreDto } from './dto/update-louvore.dto';

@Injectable()
export class LouvoresService {
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
