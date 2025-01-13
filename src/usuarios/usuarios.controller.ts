import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  Cadastrar(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.CadastrarUsuario(createUsuarioDto);
  }

  @Get()
  ListarTodos() {
    return this.usuariosService.BuscarUsuários();
  }

  @Post('/naipe')
  UsuariosNaipe(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.FiltrarUsuariosNaipe(createUsuarioDto)
  }

  @Get(':id')
  FiltrarUsuario(@Param('id') id: string) {
    return this.usuariosService.FiltrarUsuarioID(id);
  }

  @Patch(':id')
  Atualizar(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.Atualizar(id, updateUsuarioDto);
  }

  @Delete(':id')
  Apagar(@Param('id') id: string) {
    return this.usuariosService.Apagar(id);
  }
}
