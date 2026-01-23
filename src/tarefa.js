class aluno {

    constructor(nomeAluno, notaAluno) {
        this.nome = nomeAluno;
        this.nota = notaAluno;
    }

   resultadoFinal() {
    if (this.nota >= 6) {
        console.log(`${this.nome} passou com a média de ${this.nota}`);
    }
}
}


const Pedro = new aluno('Pedro', 7);
const Ana = new aluno('Ana', 9);
const Maria = new aluno('Maria', 6.5);
const Carlos = new aluno('Carlos', 5);
const Luiza =  new aluno('Luiza', 8);


console.log('--- RESULTADO DE TODOS OS ALUNOS ---');
console.log(Pedro);
console.log(Ana);
console.log(Maria);
console.log(Carlos);
console.log(Luiza);


console.log('--- RESULTADO APENAS DOS APROVADOS ---');
Pedro.resultadoFinal();
Ana.resultadoFinal();
Maria.resultadoFinal();
Carlos.resultadoFinal();
Luiza.resultadoFinal();