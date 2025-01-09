import { PartialType } from '@nestjs/mapped-types';
import { CreateNaipeDto } from './create-naipe.dto';

export class UpdateNaipeDto extends PartialType(CreateNaipeDto) {}
