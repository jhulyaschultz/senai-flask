function mostrarMedia(num1, num2) {
    const media = (num1 + num2) / 2
    console.log(`A média destes dois números é: ${media}`)
}

const readline = require('readline-sync')
const a = readline.questionFloat('Digite o primeiro número: ')
const b = readline.questionFloat('Digite o segundo número: ')
mostrarMedia(a, b)
