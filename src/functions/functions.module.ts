import { PrismaModule } from './../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { FiltarCargoNaipeService } from './filtar-cargo-naipe.service';
import { EscalasFunctionService } from './escalas-function.service';

@Module({
  imports: [PrismaModule],
  providers: [FiltarCargoNaipeService, EscalasFunctionService],
  exports: [FiltarCargoNaipeService, EscalasFunctionService]
})
export class FunctionsModule {}
