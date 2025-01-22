import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from "@nestjs/common";
import { CreateEscalaDto } from "src/escalas/dto/create-escala.dto";
import { FiltarCargoNaipeService } from './filtar-cargo-naipe.service';

@Injectable()
export class EscalasFunctionService {

    constructor(
        private prisma: PrismaService,
        private filtros: FiltarCargoNaipeService
    ) { }

    async FiltrarUsuarioCargo(cargo: string) {
        const cargoId = this.filtros.EscolheCargo(cargo)

        const ministros = await this.prisma.usuarios.findMany({
            where: {
                cargo: { id: cargoId}
            },
            select: { nome: true, sobrenome: true }
        })

        if (ministros.length === 0) {
            throw new Error('Nenhum usuário encontrado para o naipe.');
        }

        const index = Math.floor(Math.random() * ministros.length)

        return `${ministros[index].nome} ${ministros[index].sobrenome}`
    }

    async FiltrarUsuarioNaipe(naipe: string) {
        const naipeId = this.filtros.EscolheNaipe(naipe)

        const usuarios = await this.prisma.usuarios.findMany({
            where: {
                naipe: { id: naipeId }
            },
            select: { nome: true, sobrenome: true }
        })

        return usuarios
    }

    async FormataUsuarioString(funcao: string) {
        const usuarios = await this.FiltrarUsuarioNaipe(funcao)

        if (usuarios.length === 0) {
            throw new Error('Nenhum usuário encontrado para o naipe.');
        }

        const index = Math.floor(Math.random() * usuarios.length)

        return `${usuarios[index].nome} ${usuarios[index].sobrenome}`
    }

    async CriarModelo(createEscalaDto: CreateEscalaDto) {
        const ministro = await this.FormataUsuarioString(createEscalaDto.ministro)
        const soprano = await this.FormataUsuarioString(createEscalaDto.sopranos)
        const contralto = await this.FormataUsuarioString(createEscalaDto.contraltos)
        const tenor = await this.FormataUsuarioString(createEscalaDto.tenores)
        const teclado = await this.FormataUsuarioString(createEscalaDto.tecladistas)
        const violao = await this.FormataUsuarioString(createEscalaDto.violao)
        const guitarra = await this.FormataUsuarioString(createEscalaDto.guitarra)
        const baixo = await this.FormataUsuarioString(createEscalaDto.baixo)
        const bateria = await this.FormataUsuarioString(createEscalaDto.bateria)

        return {
            ministro,
            soprano,
            contralto,
            tenor,
            teclado,
            violao,
            guitarra,
            baixo,
            bateria
        }
    }
}