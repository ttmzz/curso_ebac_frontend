class Calcular {
    valor1: number;
    valor2: number;


    constructor(valor1: number, valor2:number) {
        this.valor1 = valor1;
        this.valor2 = valor2;

    }

    multiplicador() {
        return this.valor1 * this.valor2;
    }
}

const mult = new Calcular(5, 3);
console.log(mult.multiplicador()); // 15

console.log("------------------------------------");

class Nome {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    saldacao() {
        return 'Olá ' + `${this.name}`;
    }
}

const resp = new Nome('Pedro');
console.log(resp.saldacao());
