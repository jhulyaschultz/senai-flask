// Criando um vetor
const frutas = ['MORANGO','KIWI','LARANJA','ABACATE','MELANCIA'];

console.log('\nExibindo todos elementos dentro do vetor');
console.log(frutas);

console.log('\nExibindo o primeiro elemento do vetor');
console.log(frutas[0]);
console.log(frutas[2]);

console.log('\nAdicionando elementos no vetor.');
frutas.push('UVA');
console.log(frutas);

console.log('\nRemovendo o último elemento do vetor.');
frutas.pop();
console.log(frutas);

console.log('\nRemovendo o primeiro elemento do vetor.');
frutas.shift();
console.log(frutas);

console.log('\nPercorrendo o vetor.')
frutas.forEach((fruta, index) => {
    console.log(`${++index}: ${fruta}`)
})





