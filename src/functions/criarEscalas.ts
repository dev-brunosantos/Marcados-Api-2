import { PrismaService } from "../prisma/prisma.service";


class Escalas {
    constructor(private prisma: PrismaService){}

    async FiltrarUsuarios(naipe) {
        const usuarios = await this.prisma.usuarios.findMany({
            where: { naipe: naipe }
        })

        return usuarios
    }

    async GerarEscala() {
        
    }
}
