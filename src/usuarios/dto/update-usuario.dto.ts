import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';
import { IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
    @IsString()
    @IsOptional()
    nome: string

    @IsString()
    @IsOptional()
    sobrenome?: string

    @IsString()
    @IsOptional()
    @MinLength(6, { message: 'A senha deve conter no mínino 6 caracteres.'})
    senha: string

    @IsString()
    @IsOptional()
    cargo: string

    @IsString()
    @IsOptional()
    naipe: string
    
    dtAtualizacao: Date
}
