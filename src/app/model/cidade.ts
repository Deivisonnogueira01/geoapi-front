export class Cidade {
  idCidade: number;
  idEstado: number;
  nome: string;
  codigoTom: string;

  constructor(idCidade: number, idEstado: number, nome: string, codigoTom: string) {
    this.idCidade = idCidade;
    this.idEstado = idEstado;
    this.nome = nome;
    this.codigoTom = codigoTom;
  }
}
