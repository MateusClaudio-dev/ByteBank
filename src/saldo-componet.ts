let saldo: number = 3000;

const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;
const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;

if (elementoSaldo != null) {
    elementoSaldo.textContent = formatarMoeda(saldo)
}

if (elementoDataAcesso != null) {
    const dataAcesso = new Date()
    elementoDataAcesso.textContent = formatarData(dataAcesso);
    
}