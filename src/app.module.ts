import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CargosModule } from './cargos/cargos.module';

@Module({
  imports: [CargosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
