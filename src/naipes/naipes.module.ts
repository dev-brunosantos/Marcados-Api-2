import { Module } from '@nestjs/common';
import { NaipesService } from './naipes.service';
import { NaipesController } from './naipes.controller';

@Module({
  controllers: [NaipesController],
  providers: [NaipesService],
})
export class NaipesModule {}
