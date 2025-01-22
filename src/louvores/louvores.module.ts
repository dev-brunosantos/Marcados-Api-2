import { Module } from '@nestjs/common';
import { LouvoresService } from './louvores.service';
import { LouvoresController } from './louvores.controller';

@Module({
  controllers: [LouvoresController],
  providers: [LouvoresService],
})
export class LouvoresModule {}
