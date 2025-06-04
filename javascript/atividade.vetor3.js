const readline = require('readline-sync');

const numeros = [];
let negativos = 0;
let somaPositivos = 0;

for (let i = 0; i < 5; i++) {
    let numero = readline.questionInt(`Digite o número ${i + 1}: `);
    numeros.push(numero);
    if (numero < 0) {
        negativos++;
    } else {
        somaPositivos += numero;
    }
}

console.log("\nNúmeros digitados: ", numeros);
console.log("Quantidade de números negativos:", negativos);
console.log("Soma dos números positivos:", somaPositivos);
