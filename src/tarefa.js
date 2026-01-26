const alunos = [  // alunos é um array...
    { nome: 'Pedro', nota: 7 },
    { nome: 'Ana', nota: 9 },
    { nome: 'Maria', nota: 6.5 },
    { nome: 'Carlos', nota: 5 },
    { nome: 'Luiza', nota: 8 }
];

const aprovados = alunos.filter(aluno => aluno.nota >= 6); // filtrar os alunos do array com nota igual ou superior a 6...

const resultadoFinal = aprovados.map(aluno => 
    `${aluno.nome} passou com a média de ${aluno.nota}`
);

console.log('--- APROVADOS ---');

resultadoFinal.forEach(msg => console.log(msg)); // Para cada item do array resultadoFinal, chama esse item de msg e mostra ele no console...
