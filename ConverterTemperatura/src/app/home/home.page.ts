import {Component} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    escalaDe: string;
    temperaturaDe: number;
    escalaPara: string;
    temperaturaPara: number;

    constructor() {
    }

    converterParaCelcius(tempertura: number): number {
        return (5 * (tempertura - 32) / 9);
    }

    converterParaFahrenheit(temperatura: number): number {
        return (temperatura / 5 * 9 + 32);
    }

    async converter(): Promise<void> {
        if (this.escalaPara === 'c') {
            this.temperaturaPara = this.converterParaCelcius(this.temperaturaDe);
        } else {
            if (this.escalaPara === 'f') {
                this.temperaturaPara = this.converterParaFahrenheit(this.temperaturaDe);
            }
        }
    }

    async limpar(): Promise<void> {
        this.escalaPara = null;
        this.escalaDe = null;
        this.escalaPara = null;
        this.temperaturaDe = null;
    }
}
