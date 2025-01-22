import { PartialType } from '@nestjs/mapped-types';
import { CreateLouvoreDto } from './create-louvore.dto';

export class UpdateLouvoreDto extends PartialType(CreateLouvoreDto) {}
