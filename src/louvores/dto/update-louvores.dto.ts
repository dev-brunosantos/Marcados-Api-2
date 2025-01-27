import { PartialType } from '@nestjs/mapped-types';
import { CreateLouvoreDto } from './create-louvores.dto';

export class UpdateLouvoreDto extends PartialType(CreateLouvoreDto) {}
