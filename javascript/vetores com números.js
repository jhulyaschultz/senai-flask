// CRIANDO UMA LISTA.
const numeros = [1,2,3,4,5,6]

console.log('EXIBINDO ELEMENTOS DA LISTA: ')
console.log(numeros)

console.log('\nMULTIPLICAÇÃO COM ELEMENTOS DA LISTA: ')
const dobrados = numeros.map(n => n * 2)
console.log(dobrados)

console.log('\nFILTRANDO NÚMEROS PARES: ')
const pares = numeros.filter(n =>n % 2 === 0)
console.log(pares)

console.log('\nSOMANDO TODOS OS NÚMEROS DO VETOR: ')
const total = numeros.reduce((soma,atual) => soma + atual, 0)
console.log(total)

