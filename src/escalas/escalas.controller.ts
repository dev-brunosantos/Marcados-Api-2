import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EscalasService } from './escalas.service';
import { CreateEscalaDto } from './dto/create-escala.dto';
import { UpdateEscalaDto } from './dto/update-escala.dto';

@Controller('escalas')
export class EscalasController {
  constructor(private readonly escalasService: EscalasService) {}

  @Post()
  Criar(@Body() createEscalaDto: CreateEscalaDto) {
    return this.escalasService.NovaEscala(createEscalaDto);
  }

  @Get()
  ListarEscalas() {
    return this.escalasService.ListarTodos();
  }

  @Get(':id')
  FiltrarEscalaID(@Param('id') id: string) {
    return this.escalasService.ListarTarefa(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEscalaDto: UpdateEscalaDto) {
    return this.escalasService.update(+id, updateEscalaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.escalasService.remove(+id);
  }
}
