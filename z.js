const data = new Date().toISOString()

function formataData(teste) {
    const data1 = teste.slice(0, 10).split('-')
    
    const dia = data1[2]
    const mes = data1[1]
    const ano = data1[0]

    const dataFormatada = `${dia}/${mes}/${ano}` 

    console.log(dataFormatada);
    return dataFormatada
}

formataData(data)