"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Calcular {
    valor1;
    valor2;
    constructor(valor1, valor2) {
        this.valor1 = valor1 * 2;
        this.valor2 = valor2 * 2;
    }
    multiplicador() {
        return [this.valor1, this.valor2];
    }
}
const mult = new Calcular(5, 3);
console.log(mult.multiplicador());
console.log("------------------------------------");
class Nome {
    name;
    constructor(name) {
        this.name = name;
    }
    saldacao() {
        return 'Olá ' + `${this.name}`;
    }
}
const resp = new Nome('Pedro');
console.log(resp.saldacao());
//# sourceMappingURL=typescript-exercicio.js.map