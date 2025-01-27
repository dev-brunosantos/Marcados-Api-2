import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LouvoresService } from './louvores.service';
import { CreateLouvoreDto } from './dto/create-louvores.dto';
import { UpdateLouvoreDto } from './dto/update-louvores.dto';

@Controller('louvores')
export class LouvoresController {
  constructor(private readonly louvoresService: LouvoresService) {}

  @Post()
  create(@Body() createLouvoreDto: CreateLouvoreDto) {
    return this.louvoresService.create(createLouvoreDto);
  }

  @Get()
  findAll() {
    return this.louvoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.louvoresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLouvoreDto: UpdateLouvoreDto) {
    return this.louvoresService.update(+id, updateLouvoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.louvoresService.remove(+id);
  }
}
