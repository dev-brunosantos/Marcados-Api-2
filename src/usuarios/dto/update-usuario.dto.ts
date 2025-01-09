import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
    nome: string
    sobrenome?: string
    senha: string
    cargo: string
    naipe: string
    dtAtualizacao: Date
}
