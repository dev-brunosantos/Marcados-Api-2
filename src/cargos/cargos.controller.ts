import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CargosService } from './cargos.service';
import { CreateCargoDto } from './dto/create-cargo.dto';
import { UpdateCargoDto } from './dto/update-cargo.dto';

@Controller('cargos')
export class CargosController {
  constructor(private readonly cargosService: CargosService) {}

  @Post()
  Criar(@Body() createCargoDto: CreateCargoDto) {
    return this.cargosService.create(createCargoDto);
  }

  @Get()
  Listar() {
    return this.cargosService.findAll();
  }

  @Get(':id')
  Filtrar(@Param('id') id: string) {
    return this.cargosService.findOne(+id);
  }

  @Patch(':id')
  Atualizar(@Param('id') id: string, @Body() updateCargoDto: UpdateCargoDto) {
    return this.cargosService.update(+id, updateCargoDto);
  }

  @Delete(':id')
  Apagar(@Param('id') id: string) {
    return this.cargosService.remove(+id);
  }
}
