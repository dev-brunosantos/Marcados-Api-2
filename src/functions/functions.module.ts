import { Module } from '@nestjs/common';
import { FiltarCargoNaipeService } from './filtar-cargo-naipe.service';

@Module({
  providers: [FiltarCargoNaipeService],
  exports: [FiltarCargoNaipeService]
})
export class FunctionsModule {}
