import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './escalas/usuarios/usuarios.module';
import { CargosModule } from './cargos/cargos.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UsuariosModule, CargosModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
