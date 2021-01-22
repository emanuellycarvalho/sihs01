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
    private calculou: boolean;

    constructor() {
        this.reiniciar();
        this.calculou = false;
    }

    async reiniciar(): Promise<void> {
        this.numeroDisplay = "0";
        this.opercao = "";
    }

    async registrarNumero(numero: string): Promise<void> {
        if ((this.numeroDisplay === "0") || (this.numeroDisplay === "") || this.calculou) {
            this.numeroDisplay = numero;
            this.calculou = false;
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
        this.calculou = true;
    }

    async definirOperacao(operacao: string): Promise<void> {
        if (this.opercao === "") {
            this.opercao = operacao;
            this.tempNumeroDisplay = Number(this.numeroDisplay);
            this.numeroDisplay = "";
        } else {
            this.calcular();
            this.opercao = operacao;
        }
    }

    async backSpace(): Promise<void> {
        if ((Number(this.numeroDisplay) < 10 && Number(this.numeroDisplay) > 0) || (Number(this.numeroDisplay) > -10) && Number(this.numeroDisplay) < 0) {
            this.numeroDisplay = "0";
        } else {
            let aux = "";
            for (let i = 0; i < this.numeroDisplay.length - 1; i++) {
                aux += this.numeroDisplay[i]
            }
            this.numeroDisplay = aux
        }
    }

    async deleteCurrent(): Promise<void> {
        this.numeroDisplay = "0";
    }

    async pow(): Promise<void> {
        this.numeroDisplay = (Number(this.numeroDisplay) ** 2).toString();
        this.calculou = true;
    }

    async square(): Promise<void> {
        this.numeroDisplay = (Math.sqrt(Number(this.numeroDisplay))).toString();
        this.calculou = true;
    }

    async byOne(): Promise<void> {
        this.numeroDisplay = (1 / (Number(this.numeroDisplay))).toString();
        this.calculou = true;
    }

    async perCent(): Promise<void> {
        this.numeroDisplay = (Number(this.numeroDisplay) / 100).toString();
        this.calculou = true;
    }

    async opposite(): Promise<void> {
        this.numeroDisplay = ((Number(this.numeroDisplay) * -1)).toString();
    }

    async decimal(): Promise<void> {
        this.numeroDisplay += ".";
    }

}
