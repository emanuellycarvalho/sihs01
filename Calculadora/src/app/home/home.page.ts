import {Component} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    private numeroDisplay: string;
    private opercao: string;
    private tempNumeroDisplay: number;

    constructor() {
        this.reiniciar();
    }

    async reiniciar(): Promise<void> {
        this.numeroDisplay = "0";
        this.opercao = "";
    }

    async registrarNumero(numero: string): Promise<void> {
        if ((this.numeroDisplay === "0") || (this.opercao !== "")) {
            this.numeroDisplay = numero;
        } else {
            this.numeroDisplay = this.numeroDisplay + numero;
        }
    }

    calcularResultado(numero1: number, numero2: number, operacao: string): number {
        let resultado: number;
        switch (operacao) {
            case '+':
                resultado = numero1 + numero2;
                break;
            case '-':
                resultado = numero1 - numero2;
                break;
            case '*':
                resultado = numero1 * numero2;
                break;
            case '/':
                resultado = numero1 / numero2;
                break;
            default:
                resultado = 0;
        }
        return resultado;
    }

    async calcular(): Promise<void> {
        let resultado: number;
        resultado = this.calcularResultado(this.tempNumeroDisplay, Number(this.numeroDisplay), this.opercao);
        this.numeroDisplay = resultado.toString();
        this.tempNumeroDisplay = resultado;
        this.opercao = "";
    }

    async definirOperacao(operacao: string): Promise<void> {
        if (this.opercao === "") {
            this.opercao = operacao;
            this.tempNumeroDisplay = Number(this.numeroDisplay);
        } else {

        }
    }

}
