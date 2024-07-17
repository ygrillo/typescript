import { Negociacao } from './negociacao.js'

export class Negociacoes {
  private negociacoes: Negociacao[] = []

  adiciona(negociacao: Negociacao): void {
    this.negociacoes.push(negociacao)
  }

  listaNegociacoes(): readonly Negociacao[] {
    return this.negociacoes
  }
}
