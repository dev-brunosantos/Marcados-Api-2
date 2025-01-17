import { FunctionsModule } from 'src/functions/functions.module';
import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { PrismaModule } from './../prisma/prisma.module';

@Module({
  imports: [PrismaModule, FunctionsModule],
  controllers: [UsuariosController],
  providers: [UsuariosService],
})
export class UsuariosModule {}
