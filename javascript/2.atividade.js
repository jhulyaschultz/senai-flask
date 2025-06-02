const readline = require('readline-sync')

const a = readline.questionFloat('Digite o valor de a: ')
const b = readline.questionFloat('Digite o valor de b: ')

let c

if (a === b) {
    c = a + b
} else {
    c = a * b
}

console.log(`O resultado é: ${c}`)

