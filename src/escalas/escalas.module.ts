import { PrismaModule } from './../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { EscalasService } from './escalas.service';
import { EscalasController } from './escalas.controller';
import { FunctionsModule } from 'src/functions/functions.module';

@Module({
  imports: [PrismaModule, FunctionsModule],
  controllers: [EscalasController],
  providers: [EscalasService],
})
export class EscalasModule {}
