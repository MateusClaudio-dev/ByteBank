import { Transacao } from "./transacao.js";
import { TipoTransacao } from "./tipoTransacao.js";

let saldo: number = 3000;

function debitar(valor: number): void {
    if (valor <= 0) {
        throw new Error('Valor invalído');
    }

    if (valor > saldo) {
       throw new Error('Saldo insuficiente') ;
    } 
    saldo -= valor;
}

function depositar(valor: number): void {
    if (valor <= 0) {
        throw new Error('Valor invalído')
    }
    saldo += valor
}



const Conta = {
    GetSaldo() {
        return saldo;
    },

    GetDataAcesso(): Date {
        return new Date
    },

    registrarTransacao(novaTransacao: Transacao): void {
        if (novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
            depositar(novaTransacao.valor)
        } 
        else if (novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
            debitar(novaTransacao.valor)
        } 
        else {
            throw new Error("Tipo de Transação é inválido!");
        }

        console.log(novaTransacao)
    }
}

export default Conta;