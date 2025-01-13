import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CargosModule } from './cargos/cargos.module';
import { NaipesModule } from './naipes/naipes.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { EscalasModule } from './escalas/escalas.module';

@Module({
  imports: [CargosModule, NaipesModule, UsuariosModule, EscalasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
