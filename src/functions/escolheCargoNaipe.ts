export function EscolheCargo(cargo):number {

    var id = 0

    switch (cargo) {
        case "Ministro":
        case "ministro":
            id = 1;
            break;
        case "Vocal":
        case "vocal":
            id = 2;
            break;
        case "Musico":
        case "musico":
            id = 3;
            break;

        default:
            break;
            // return { erro: "O cargo informado não esta cadastrado no sistema." }
    }

    return id
}

export function EscolheNaipe(naipe):number {

    var id = 0

    switch (naipe) {
        case "Soprano":
        case "soprano":
            id = 1;
            break;
        case "Contralto":
        case "contralto":
            id = 2;
            break;
        case "Tenor":
        case "tenor":
            id = 3;
            break;
        case "Teclado":
        case "teclado":
            id = 4;
            break;
        case "Violão":
        case "violão":
            id = 5;
            break;
        case "Guitarra":
        case "guitarra":
            id = 6;
            break;
        case "Baixo":
        case "baixo":
            id = 7;
            break;
        case "Bateria":
        case "bateria":
            id = 8;
            break;
        case "Sax":
        case "sax":
            id = 9;
            break;

        default:
            break;
            // return { erro: "O naipe informado não esta cadastrado no sistema." }
    }

    return id
}
