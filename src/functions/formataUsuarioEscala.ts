
export function formataUsuarioEscala(dado, posicao):string {
  const nome = dado[posicao].nome
  const sobrenome = dado[posicao].sobrenome

  const infor = `${nome} ${sobrenome}`
  
  return infor
}