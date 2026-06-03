import { TipoTransacao } from "./tipoTransacao.js";

export type Transacao = {
    tipoTransacao: TipoTransacao;
    valor: Number
    data: Date
}