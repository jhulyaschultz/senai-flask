// Atividade: Média Aritmética de 3 Notas
const readline = require('readline-sync');

listaDeNotas = [];

for (let i = 0; i < 3; i++) {
   let nota = readline.questionFloat(`Digite a nota ${i + 1}: `);
    listaDeNotas.push(nota);
}

console.log('Soma das Notas: ')
soma = listaDeNotas.reduce((soma, total) => soma + total, 0);
console.log(soma)

console.log('\nQuantidade De Notas: ')
quantidadeDeNota = listaDeNotas.length
console.log('quantidadeDeNota')

console.log('\nMédia Aritmética:');
media = soma / quantidadeDeNota;
console.log(media);

console.log('\nExibindo Todas Notas: ')
listaDeNotas.forEach((nota, index) => {console.log(`${++index}${nota}`)});

