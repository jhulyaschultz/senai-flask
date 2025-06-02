function verificaPositivoNegativo(numero) {
    if (numero > 0) {
        console.log('O número é positivo')
    } else if (numero < 0) {
        console.log('O número é negativo')
    } else {
        console.log('O número é zero')
    }
}

// Exemplo de uso:
const readline = require('readline-sync')
const valor = readline.questionInt('Digite um número inteiro: ')
verificaPositivoNegativo(valor)