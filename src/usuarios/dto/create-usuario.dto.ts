import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUsuarioDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3, { message: 'I campo campo NOME deve conter no mínino 3 caracteres.'})
    nome: string
    
    @IsString()
    @IsOptional()
    sobrenome?: string

    @IsString()
    @IsNotEmpty()
    email: string
    
    @IsString()
    @IsNotEmpty()
    @MinLength(6, { message: 'A senha deve conter no mínino 6 caracteres.'})
    senha: string
    
    @IsString()
    @IsNotEmpty()
    cargo: string
    
    @IsString()
    @IsNotEmpty()
    naipe: string
    dtCadastro: Date
    dtAtualizacao: Date
}
