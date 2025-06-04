
const readline = require('readline-sync');

const numeros = [];

for (let i = 0; i < 6; i++) {
    let numero = readline.questionInt(`Digite o número ${i + 1}: `);
    numeros.push(numero);
}

let pares = 0;
let impares = 0;

numeros.forEach((numero) => {
    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
});

console.log("\nNúmeros digitados: ");
console.log("Quantidade de números pares:", pares);
console.log("Quantidade de números ímpares:", impares);