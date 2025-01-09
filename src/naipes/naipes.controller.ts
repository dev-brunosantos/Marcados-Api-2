import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NaipesService } from './naipes.service';
import { CreateNaipeDto } from './dto/create-naipe.dto';
import { UpdateNaipeDto } from './dto/update-naipe.dto';

@Controller('naipes')
export class NaipesController {
  constructor(private readonly naipesService: NaipesService) {}

  @Post()
  create(@Body() createNaipeDto: CreateNaipeDto) {
    return this.naipesService.create(createNaipeDto);
  }

  @Get()
  findAll() {
    return this.naipesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.naipesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNaipeDto: UpdateNaipeDto) {
    return this.naipesService.update(+id, updateNaipeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.naipesService.remove(+id);
  }
}
