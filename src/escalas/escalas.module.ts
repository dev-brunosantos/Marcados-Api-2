import { PrismaModule } from './../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { EscalasService } from './escalas.service';
import { EscalasController } from './escalas.controller';

@Module({
  imports: [PrismaModule],
  controllers: [EscalasController],
  providers: [EscalasService],
})
export class EscalasModule {}
