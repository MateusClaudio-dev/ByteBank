import { Transacao } from "./transacao.js";
import { TipoTransacao } from "./tipoTransacao.js";
import { GrupoTransacao } from "./GrupoTransacao.js";

// * ALURA
let saldo: number =JSON.parse(localStorage.getItem("saldo")) || 0;
const transacoes:Transacao[] =JSON.parse(localStorage.getItem("transacoes"), (key: string, value: string) => {
if (key === "data") {
return new Date(value);
    }

return value;
}) || [];

//* IA 
// let saldo: number = JSON.parse(localStorage.getItem("saldo") || "0"); // colocar o '0' fora do parse 
// const transacoes: Transacao[] = JSON.parse(localStorage.getItem("transacoes") || "[]", // Se for null, vira "[]"
//     (key: string, value: string) => {                                         // colocar o array fora do parse 
//         if (key == "data") {
//             return new Date(value);
//         }
//         return value;
//     }
// );

function debitar(valor: number): void {
    if (valor <= 0) {
        throw new Error('Valor invalído');
    }

    if (valor > saldo) {
       throw new Error('Saldo insuficiente') ;
    } 
    saldo -= valor;
    localStorage.setItem("saldo", saldo.toString())
}

function depositar(valor: number): void {
    if (valor <= 0) {
        throw new Error('Valor invalído')
    }
    saldo += valor
    localStorage.setItem("saldo", saldo.toString())
}



const Conta = {
    GetSaldo() {
        return saldo;
    },

    GetDataAcesso(): Date {
        return new Date
    },

    getGruposTransacoes(): GrupoTransacao[] {
        const GruposTransacoes = GrupoTransacao[] = [];
        const listaTransacoes: Transacao[] = structuredClone(transacoes);
        const transacoesOrdenadas: Transacao[] = listaTransacoes.sort((t1, t2) => t2.data.getTime() - t1.data.getTime());
        let labelAtualGrupoTransacao: string = "";

        for (let transacao of transacoesOrdenadas) {
            let labelGrupoTransacao: string = transacao.data.toLocaleDateString("pt-br", {month: "long", year: "numeric"})
            if (labelAtualGrupoTransacao !== labelGrupoTransacao) {
                labelAtualGrupoTransacao = labelGrupoTransacao;
                GruposTransacoes.push({
                    label: labelGrupoTransacao,
                    transacoes: []
                });
            }
            GruposTransacoes.at(-1).transacoes.push(transacao);
        }

        return GruposTransacoes
    },

    registrarTransacao(novaTransacao: Transacao): void {
        if (novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
            depositar(novaTransacao.valor)
        } 
        else if (novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
            debitar(novaTransacao.valor)
            novaTransacao.valor = *= -1;
        } 
        else {
            throw new Error("Tipo de Transação é inválido!");
        }

        transacoes.push(novaTransacao)
        console.log(this.getGruposTransacoes)
        localStorage.setItem("transacoes", JSON.stringify(transacoes));
    }
}

export default Conta;