const readline = require('readline-sync');

const numero = readline.questionInt("Digite um número de 1 a 7 representando o dia da semana: ");

if (numero < 1 || numero > 7) {
    console.log("Dia inválido!");
} else if (numero === 1 || numero === 7) {
    console.log("Fim de semana!");
} else {
    console.log("Dia útil!");
}