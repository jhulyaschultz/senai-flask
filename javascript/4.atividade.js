const readline = require('readline-sync')

const numero = readline.questionInt('Digite um número: ')

if (numero % 2 === 0) {
    console.log('O número é par')
} else {
    console.log('O número é ímpar')
}
console.log(`O número digitado é: ${numero}`)
console.log(`O número é ${numero % 2 === 0 ? 'par' : 'ímpar'}`)
