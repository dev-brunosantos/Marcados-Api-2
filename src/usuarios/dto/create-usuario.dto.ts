export class CreateUsuarioDto {
    nome: string
    sobrenome?: string
    email: string
    senha: string
    cargo: string
    naipe: string
    dtCadastro: Date
    dtAtualizacao: Date
}
