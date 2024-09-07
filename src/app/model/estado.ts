export class Estado {
  idEstado: number;
  nome: string;
  acronimo: string;
  regiao: string;
  posEstado: string;

  constructor(idEstado: number, nome: string, acronimo: string, regiao: string, posEstado: string) {
    this.idEstado = idEstado;
    this.nome = nome;
    this.acronimo = acronimo;
    this.regiao = regiao;
    this.posEstado = posEstado;
  }
}
