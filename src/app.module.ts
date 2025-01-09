import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CargosModule } from './cargos/cargos.module';
import { NaipesModule } from './naipes/naipes.module';

@Module({
  imports: [CargosModule, NaipesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
