function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return 'Divisão por zero não é permitida';
  }
  return a / b;
}

const soma = somar(2, 3);
const subtracao = subtrair(5, 2);
const multiplicacao = multiplicar(4, 3);
const divisao = dividir(10, 2);

console.log(`soma: ${soma}`);
console.log(`subtração: ${subtracao}`);
console.log(`multiplicação: ${multiplicacao}`);
console.log(`divisão: ${divisao}`);