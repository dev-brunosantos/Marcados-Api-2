import { Module } from '@nestjs/common';
import { NaipesService } from './naipes.service';
import { NaipesController } from './naipes.controller';
import { PrismaModule } from '../prisma/prisma.module'

@Module({
  imports: [PrismaModule],
  controllers: [NaipesController],
  providers: [NaipesService],
})
export class NaipesModule {}
