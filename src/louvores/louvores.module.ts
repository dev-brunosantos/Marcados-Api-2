import { Module } from '@nestjs/common';
import { LouvoresService } from './louvores.service';
import { LouvoresController } from './louvores.controller';
import { PrismaModule } from './../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [LouvoresController],
  providers: [LouvoresService],
})
export class LouvoresModule {}
