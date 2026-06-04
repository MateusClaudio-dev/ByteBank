import { Transacao } from "./transacao.js";
import { TipoTransacao } from "./tipoTransacao.js";

let saldo: number = 3000;

const Conta = {
    GetSaldo() {
        return saldo;
    },

    GetDataAcesso(): Date {
        return new Date
    },

    registrarTransacao(novaTransacao: Transacao): void {
        if (novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
            saldo += novaTransacao.valor
        } 
        else if (novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
            saldo -= novaTransacao.valor;
        } 
        else {
            alert("Tipo de Transação é inválido!");
            return;
        }

        console.log(novaTransacao)
    }
}

export default Conta;