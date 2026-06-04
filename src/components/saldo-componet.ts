import { FormatoData } from "../types/FormatoData.js";
import { formatarMoeda, formatarData } from "../utils/formatters.js";


export let saldo: number = 3000;

const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;
const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;

if (elementoDataAcesso != null) {
    const dataAcesso = new Date()
    elementoDataAcesso.textContent = formatarData(dataAcesso, FormatoData.DIA_SEMANA_DIA_MES_ANO);
    
}

getSaldo();
export function getSaldo(): number {
    return saldo;
}

export function atualizarSaldo(novoSaldo: number): void {
    saldo = novoSaldo;
    if (elementoSaldo != null) {
        elementoSaldo.textContent = formatarMoeda(saldo);
    }
}