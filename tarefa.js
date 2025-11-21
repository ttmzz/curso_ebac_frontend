// 1. Cria uma classe de uma abstração
class Veiculo {
    constructor(modelo, fabricante, ano) {
        this.modelo = modelo; 
        this.fabricante = fabricante;
        this.ano = ano;
    }

    mostrarDados() {
        console.log(`Modelo: ${this.modelo}, Fabricante: ${this.fabricante}, Ano: ${this.ano}`);
    }
}

// 2. Cria duas classes herdeiras de Veiculo
class Carro extends Veiculo {
    constructor(modelo, fabricante, ano, portas) {
        super(modelo, fabricante, ano); // chama o construtor de Veiculo
        this.portas = portas; // só pode usar "this" depois do super()
    }

    mostrarDados() {
        super.mostrarDados();
        console.log(`Portas: ${this.portas}`);
    }
}

class Moto extends Veiculo {
    constructor(modelo, fabricante, ano, cilindradas) {
        super(modelo, fabricante, ano); // chama o construtor de Veiculo
        this.cilindradas = cilindradas; // só pode usar "this" depois do super()
    }

    mostrarDados() {
        super.mostrarDados();
        console.log(`Cilindradas: ${this.cilindradas}`);
    }
}

// 3. Cria três instâncias de objetos

// O objeto é criado nesta parte com o new...
const carro1 = new Carro("Mustang Mach-E", "Ford", 2024, 4);
const carro2 = new Carro("Bronco Sport", "Ford", 2025, 4);
const moto1 = new Moto("Ninja ZX-10R", "Kawasaki", 2023, 998);

carro1.mostrarDados();
carro2.mostrarDados();
moto1.mostrarDados();

