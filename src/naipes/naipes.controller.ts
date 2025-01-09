import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NaipesService } from './naipes.service';
import { CreateNaipeDto } from './dto/create-naipe.dto';
import { UpdateNaipeDto } from './dto/update-naipe.dto';

@Controller('naipes')
export class naipesController {
  constructor(private readonly naipesService: NaipesService) {}

  @Post()
  Criar(@Body() createNaipeDto: CreateNaipeDto) {
    return this.naipesService.Criar(createNaipeDto);
  }

  @Get()
  Listar() {
    return this.naipesService.ListarNaipes();
  }

  @Get(':id')
  Filtrar(@Param('id') id: string) {
    return this.naipesService.FiltrarNaipe(+id);
  }

  @Patch(':id')
  Atualizar(@Param('id') id: string, @Body() updateNaipeDto: UpdateNaipeDto) {
    return this.naipesService.AtualizarNaipe(+id, updateNaipeDto);
  }

  @Delete(':id')
  Apagar(@Param('id') id: string) {
    return this.naipesService.ExcluirNaipe(+id);
  }
}
