const readline = require('readline-sync')

const a = readline.questionFloat('Digite o valor de a: ')
const b = readline.questionFloat('Digite o valor de b: ')
const c = readline.questionFloat('Digite o valor de c: ')

const soma = a + b

if (soma < c) {
    console.log('A soma de a + b é menor que c')
} else {
    console.log('A soma de a + b é maior que c')
}

console.log(`A soma de a + b é: ${soma}`)
console.log(`O valor de c é: ${c}`)
console.log(`A soma de a + b é ${soma < c ? 'menor' : 'maior'} que c`)
