import {Component} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    private birthDay: Date;
    private daysAge: number;
    private hoursAge: number;
    private minutesAge: number;
    private daysNextBirthDay: number;
    private weekDayNextBirthDay: string;

    constructor() {
    }

    getDate(): string | Date {
        const date = new Date();
        let max = date.toLocaleString('default', {year: 'numeric', month: 'numeric', day: 'numeric'});
        max = max.split('/')[2] + '-' + max.split('/')[1] + '-' + max.split('/')[0];
        return max;
    }

    async calcular(): Promise<void> {
        if (!isNaN(Number(new Date(this.birthDay)))) {
            const currentDate = new Date();
            this.daysAge = parseInt(String((Number(currentDate) - Number(new Date(this.birthDay))) / (24 * 3600 * 1000)));
            this.hoursAge = this.daysAge * 24;
            this.minutesAge = this.hoursAge * 60;
            const anoNasc = new Date(this.birthDay).getFullYear();
            const anoAtual = (currentDate.getFullYear());
            let bissexto = 0;
            for (let i = 0; i < anoAtual - anoNasc; i++) {
                if ((anoNasc + i) % 4 === 0) {
                    bissexto += 1;
                }
            }
            if ((365 - (this.daysAge % 365)) === 0) {
                this.daysNextBirthDay = 0;
            } else if (anoNasc % 4 === 0) {
                this.daysNextBirthDay = 365 - (this.daysAge % 365) + bissexto - 1;
            } else if (bissexto > 0) {
                this.daysNextBirthDay = 365 - (this.daysAge % 365) + bissexto;
            } else {
                this.daysNextBirthDay = 365 - (this.daysAge % 365);
            }
            if (new Date(this.birthDay).getMonth() > currentDate.getMonth()) {
                this.weekDayNextBirthDay = this.weekDay(new Date(currentDate.getFullYear(), new Date(this.birthDay).getMonth(), new Date(this.birthDay).getDate()).getDay());
                console.log('aqui');
            } else if (new Date(this.birthDay).getMonth() === currentDate.getMonth() &&
                new Date(this.birthDay).getDate() <= currentDate.getDate()) {
                this.weekDayNextBirthDay = this.weekDay(new Date(currentDate.getFullYear() + 1,
                    currentDate.getMonth(), new Date(this.birthDay).getDate()).getDay());
                console.log('menor =');
                console.log(new Date(currentDate.getFullYear() + 1,
                    currentDate.getMonth(), new Date(this.birthDay).getDate()));

            } else if (new Date(this.birthDay).getMonth() === currentDate.getMonth() &&
                new Date(this.birthDay).getDate() > currentDate.getDate()) {
                this.weekDayNextBirthDay = this.weekDay(new Date(currentDate.getFullYear(),
                    new Date(this.birthDay).getMonth(), new Date(this.birthDay).getDate()).getDay());
                console.log(new Date(currentDate.getFullYear(),
                    new Date(this.birthDay).getMonth(), new Date(this.birthDay).getDate()));

            }// }else {
            //     this.weekDayNextBirthDay = this.weekDay(new Date(currentDate.getFullYear(), new Date(this.birthDay).getMonth(), new Date(this.birthDay).getDate()).getDay());
            // }
            console.log('Anos bissexto: ', bissexto);
            console.log(365 - (this.daysAge % 365));
        } else {
            alert('Insira uma data!');
        }
    }

    weekDay(day: number): string {
        switch (day) {
            case 0:
                return 'Domingo';
            case 1:
                return 'Segunda-feira';
            case 2:
                return 'Terça-feira';
            case 3:
                return 'Quarta-feira';
            case 4:
                return 'Quinta-feira';
            case 5:
                return 'Sexta-feira';
            case 6:
                return 'Sábado';
        }
    }
}
