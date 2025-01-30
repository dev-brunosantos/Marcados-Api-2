import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LouvoresService } from './louvores.service';
import { CreateLouvoreDto } from './dto/create-louvores.dto';
import { UpdateLouvoreDto } from './dto/update-louvores.dto';

@Controller('louvores')
export class LouvoresController {
  constructor(private readonly louvoresService: LouvoresService) {}

  @Post()
  Cadastrar(@Body() createLouvoreDto: CreateLouvoreDto) {
    return this.louvoresService.Criar(createLouvoreDto);
  }

  @Get()
  Listar() {
    return this.louvoresService.Listar();
  }

  @Get(':id')
  LouvorID(@Param('id') id: string) {
    return this.louvoresService.BuscarLouvorID(+id);
  }

  @Patch(':id')
  Atualizar(@Param('id') id: string, @Body() updateLouvoreDto: UpdateLouvoreDto) {
    return this.louvoresService.Atualizar(+id, updateLouvoreDto);
  }

  @Delete(':id')
  Apagar(@Param('id') id: string) {
    return this.louvoresService.Apagar(+id);
  }
}
