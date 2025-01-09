import { Injectable } from '@nestjs/common';
import { CreateNaipeDto } from './dto/create-naipe.dto';
import { UpdateNaipeDto } from './dto/update-naipe.dto';

@Injectable()
export class NaipesService {
  create(createNaipeDto: CreateNaipeDto) {
    return 'This action adds a new naipe';
  }

  findAll() {
    return `This action returns all naipes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} naipe`;
  }

  update(id: number, updateNaipeDto: UpdateNaipeDto) {
    return `This action updates a #${id} naipe`;
  }

  remove(id: number) {
    return `This action removes a #${id} naipe`;
  }
}
